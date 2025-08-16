import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgComponent from "./SvgComponent";

function SubmitButton({ children, className, ...rest }) {
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
