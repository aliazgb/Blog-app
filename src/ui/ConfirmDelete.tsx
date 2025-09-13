import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { FormEvent } from "react";

interface ConfirmDeleteProps {
  resourceName: string;
  onClose: () => void;
  disabled?: boolean;
  onConfirm: (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

function ConfirmDelete({
  resourceName,
  onClose,
  disabled,
  onConfirm,
}: ConfirmDeleteProps) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        Are you sure you want to delete {resourceName}?
      </h2>
      <form onSubmit={onConfirm}>
        <div className="flex justify-between items-center gap-x-16">
          <Button
            className="flex-1"
            variant="outline"
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={onConfirm}
            disabled={disabled}
            variant="danger"
            className="flex gap-x-2 justify-center items-center flex-1"
          >
            <TrashIcon className="w-5" />
            <span>Delete</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ConfirmDelete;
