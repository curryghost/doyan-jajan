import { render, type ComponentChildren } from "preact";
import Modal from "../components/ui/modal/Modal";
import { useEffect } from "preact/hooks";
import type { Signal } from "@preact/signals";

export const useModal = (
  content: ComponentChildren,
  isOpen: Signal<boolean>,
  isClickAway = true
) => {
  useEffect(() => {
    const elBody = document.querySelector("body");
    const dialog = document.createElement("dialog");
    elBody?.insertAdjacentElement("afterbegin", dialog);

    render(
      <Modal isClickAway={isClickAway} isOpen={isOpen}>
        {content}
      </Modal>,
      elBody!,
      dialog
    );

    return () => {
      dialog.remove();
    };
  }, []);
};
