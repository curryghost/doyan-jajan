import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";
import "./Modal.scss";
import type { Signal } from "@preact/signals";

export default function Modal({
  children,
  isOpen,
  isClickAway = true,
}: {
  children: ComponentChildren;
  isOpen: Signal<boolean>;
  isClickAway?: boolean;
}) {
  const refDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleEvent = (e: Event) => {
      e.stopPropagation();
      if (!refDialog.current?.childNodes[0].contains(e.target as Node)) {
        isOpen.value = false;
      }
    };
    if (isOpen.peek()) {
      isClickAway && addEventListener("click", handleEvent);
      refDialog.current?.showModal();
    } else {
      isClickAway && removeEventListener("click", handleEvent);
      refDialog.current?.close();
    }
    return () => isClickAway && removeEventListener("click", handleEvent);
  }, [isOpen.value]);

  return <dialog ref={refDialog}>{children}</dialog>;
}
