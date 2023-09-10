import { ButtonType, type ButtonProps } from "./Button.type";

const buttonStyle = "rounded shadow-sm text-sm font-bold py-1 w-20";
const buttonStylePrimary = (buttonStyle: string) =>
  `${buttonStyle} bg-primary hover:bg-primary-dark hover:text-accent text-secondary`;
const buttonStyleSecondary = (buttonStyle: string) =>
  `${buttonStyle} bg-accent hover:bg-accent-dark text-primary`;

const getButtonStyle = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
      return buttonStylePrimary(buttonStyle);
    case ButtonType.Secondary:
      return buttonStyleSecondary(buttonStyle);
    default:
      return buttonStylePrimary(buttonStyle);
  }
};

export default function Button({ type, onClick, label }: ButtonProps) {
  return (
    <button onClick={onClick} class={getButtonStyle(type)}>
      {label}
    </button>
  );
}
