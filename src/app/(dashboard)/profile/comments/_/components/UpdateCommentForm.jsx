"use client";

import RHFSelectComment from "@/ui/RHFSelectComment";
import SubmitButton from "@/ui/SubmitButton";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import updateComment from "../actions/updateComment";

const options = [
  {
    id: 1,
    label: "Rejected",
    value: 0,
  },
  {
    id: 2,
    label: "Pending Approval",
    value: 1,
  },
  {
    id: 3,
    label: "Approved",
    value: 2,
  },
];

function UpdateCommentForm({ comment, onClose }) {
  const [state, formAction] = useActionState(updateComment, {
    error: "",
    message: "",
  });

  const { register } = useForm({
    defaultValues: { status: comment.status },
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, onClose]);

  return (
    <form
      className="form"
      action={async (formData) => {
        await formAction({ formData, commentId: comment._id });
      }}
    >
      <RHFSelectComment
        label="Change status"
        isRequired
        name="status"
        register={register}
        options={options}
      />
      <SubmitButton type="submit" variant="primary" className="w-full">
        Confirm
      </SubmitButton>
    </form>
  );
}

export default UpdateCommentForm;
