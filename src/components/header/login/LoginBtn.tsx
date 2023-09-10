import { useModal } from "../../../hooks/modal";
import Button from "../../ui/button/Button";
import { ButtonType } from "../../ui/button/Button.type";
import { LoginAction } from "./LoginBtn.type";
import LoginModal from "./LoginModal";
import {
  generalLoading,
  isAdmin,
  isLoginModalOpen,
  user,
} from "../../../store/signals";
import { signOut, useFirebaseInit } from "../../../hooks/firebase";

export default function LoginBtn() {
  useFirebaseInit();

  useModal(<img src="/icons/loading.gif" />, generalLoading);
  useModal(<LoginModal />, isLoginModalOpen);
  const handleClick = (action: LoginAction) => {
    switch (action) {
      case LoginAction.Login:
        isLoginModalOpen.value = true;
        break;
      case LoginAction.Logout:
        signOut();
        break;
      default:
        break;
    }
  };
  return (
    <div class="flex gap-2 items-center">
      {isAdmin.value && (
        <a class="text-xs font-bold text-red-500" href="/admin">
          Admin
        </a>
      )}
      {user.value && (
        <img src={user.value.photoUrl!} alt="" class="rounded-full w-8" />
      )}
      <Button
        type={ButtonType.Primary}
        onClick={() =>
          handleClick(user.value ? LoginAction.Logout : LoginAction.Login)
        }
        label={user.value ? "Logout" : "Login"}
      />
    </div>
  );
}
