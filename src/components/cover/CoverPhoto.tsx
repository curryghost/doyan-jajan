import { state } from "../../store/signals";

export default function CoverPhoto() {
  return (
    <div class="bg-primary-dark w-full h-[90vh]">
      <img
        src={state.value?.cover.url ?? ""}
        class="h-[90vh] w-full object-cover brightness-50 blur-[2px] absolute opacity-80"
      />
      <div class="flex flex-col items-center h-[90vh] w-full absolute">
        <img src="/icons/logo.svg" class="h-60 mt-10" alt="cover photo" />
        <div class="text-sm text-secondary-light flex w-36 justify-between mt-10 relative right-2">
          <a href="#promotion">promotion</a>
          <a href="/menu">menu</a>
        </div>
      </div>
    </div>
  );
}
