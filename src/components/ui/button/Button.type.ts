export const enum ButtonType {
  Primary,
  Secondary,
}

export interface ButtonProps {
  type: ButtonType;
  onClick: () => void;
  label: string;
}
