import {
  GoogleAuthProvider,
  signOut as fbSignOut,
  type User,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { generalLoading, isAdmin, user } from "../store/signals";
import { SignInType, type FbUser } from "./firebase.type";
import { useEffect } from "preact/hooks";
import { doc, getDoc, setDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const useFirebaseInit = () => {
  useEffect(() => {
    setUser();
    const unSubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        getUserFromDB(u);
      } else {
        removeUser();
      }
    });
    return () => unSubscribe();
  }, []);
};

const setUser = () => {
  const u = localStorage.getItem("user");
  user.value = u ? (JSON.parse(u) as FbUser) : null;
  isAdmin.value = !!localStorage.getItem("isAdmin");
};

const removeUser = () => {
  user.value = null;
  isAdmin.value = false;
  localStorage.removeItem("user");
  localStorage.removeItem("isAdmin");
  if (window.location.pathname.includes("admin")) window.location.href = "/";
};

const getUserFromDB = (u: User) => {
  const ref = doc(db, "users", u.uid);
  getDoc(ref)
    .then((doc) => {
      if (!doc.exists()) {
        const newUser: FbUser = {
          name: u.displayName!,
          email: u.email!,
          photoUrl: u.photoURL,
        };
        setDoc(ref, newUser)
          .then(() => {
            user.value = newUser;
            localStorage.setItem("user", JSON.stringify(user.value));
          })
          .catch((error) => console.log(error));
      } else {
        user.value = doc.data() as FbUser;
        localStorage.setItem("user", JSON.stringify(user.value));
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      getIsAdmin(u);
    });
};

const getIsAdmin = (u: User) => {
  const ref = doc(db, "admins", u.uid);
  getDoc(ref)
    .then((doc) => {
      if (doc.exists()) {
        isAdmin.value = true;
        localStorage.setItem("isAdmin", "true");
      } else {
        isAdmin.value = false;
        localStorage.removeItem("isAdmin");
      }
    })
    .catch((error) => console.log(error))
    .finally(() => {
      generalLoading.value = false;
    });
};

export const signIn = (type: SignInType) => {
  generalLoading.value = true;
  switch (type) {
    case SignInType.Google:
      signInWithPopup(auth, googleProvider).catch((error) =>
        console.log(error)
      );
      break;
    default:
      break;
  }
};

export const signOut = () => {
  fbSignOut(auth);
};
