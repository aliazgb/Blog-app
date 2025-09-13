import { ButtonHTMLAttributes, ReactNode } from "react";

export type VariantType = "primary" | "secondary" | "outline" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: VariantType;
  className?: string;
}

const btnType: Record<VariantType, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
