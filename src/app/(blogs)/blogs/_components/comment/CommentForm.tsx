"use client";

import { createComment } from "@/lib/action";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { CommentFormState } from "types/ApiTypes";

const initialState: CommentFormState = {
  message: "",
  error: "",
};

interface CommentPayload {
  postId: string;
  parentId?: string | null;
  onClose: () => void;
}

function CommentForm({ onClose, postId, parentId }: CommentPayload) {
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea name="text" label="comment" isRequired />
            <SubmitButton>confirm</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CommentForm;
