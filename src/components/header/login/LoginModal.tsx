import { signIn } from "../../../hooks/firebase";
import { SignInType } from "../../../hooks/firebase.type";
import { isLoginModalOpen } from "../../../store/signals";

export default function LoginModal() {
  const handleClick = (type: SignInType) => {
    signIn(type);
    isLoginModalOpen.value = false;
  };
  return (
    <div class="flex flex-col gap-5 items-center p-5 bg-primary-dark">
      <img
        onClick={() => handleClick(SignInType.Google)}
        src="/icons/googleSignIn.jpg"
        alt="sign in button"
        class="w-60 cursor-pointer hover:brightness-75"
      />
    </div>
  );
}
