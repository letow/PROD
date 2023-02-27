import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [s.square]: square,
  };

  return (
    <button
      className={classNames(s.Button, mods, [className, s[theme], s[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
