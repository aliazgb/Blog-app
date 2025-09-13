import { useFormStatus } from "react-dom";
import Button, { ButtonProps } from "./Button";
import SvgComponent from "./SvgComponent";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface SubmitButtonProps extends Omit<ButtonProps, "children"> {
  children: ReactNode;
}

function SubmitButton({ children, className, ...rest }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`flex items-center justify-center gap-x-4 py-4 w-full ${className}`}
    >
      {children}
      {pending && <SvgComponent />}
    </Button>
  );
}

export default SubmitButton;
