import { signal } from "@preact/signals";
import { uploadFile } from "../../hooks/firebase";
import { useRef } from "preact/hooks";

const file = signal<File | null>(null);
export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      file.value = target.files[0];
    } else {
      file.value = null;
    }
  };

  const handleClick = () => {
    if (file.value) {
      uploadFile(file.peek()!, "cover/cover-image")
        .catch((err) => console.log(err))
        .finally(() => {
          console.log("finally");
          inputRef.current!.value = "";
          file.value = null;
        });
    }
  };

  const getUrl = () => URL.createObjectURL(file.peek()!);

  return (
    <div class="flex flex-col gap-2">
      <div class="flex w-[80vw] h-60 justify-center">
        {file.value && <img class="object-contain" src={getUrl()} />}
      </div>
      <div class="flex flex-row gap-5 justify-center">
        <label
          class="rounded-full py-1 px-2 text-xs text-white bg-blue-500 hover:bg-blue-300"
          htmlFor="uploadInput"
        >
          Choose File
        </label>
        <input
          class="hidden"
          onChange={handleChange}
          ref={inputRef}
          id="uploadInput"
          type="file"
          accept="image"
        />
        {file.value && (
          <button
            class="text-xs text-white bg-red-500 rounded-full shadow-sm py-1 px-2 hover:bg-red-300"
            onClick={handleClick}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
}
