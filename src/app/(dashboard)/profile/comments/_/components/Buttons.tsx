"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import EditCommentForm from "./UpdateCommentForm";
import useDeleteComment from "../useDeleteComment";
import { useRouter } from "next/navigation";
import { Comment } from "types/ApiTypes";

type DeleteCommentProps = {
  comment: Pick<Comment, "_id" | "title">;
};

type UpdateCommentProps = {
  comment: Comment;
};

export function DeleteComment({ comment }: DeleteCommentProps) {
  const { _id: id, title } = comment;
  const { isDeleting, deleteComment } = useDeleteComment();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`Delete Comment`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          disabled={isDeleting}
          resourceName={title || "Comment"}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deleteComment(
              { id },
              {
                onSuccess: () => {
                  setIsDeleteOpen(false);
                  router.refresh();
                },
              }
            );
          }}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }: UpdateCommentProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="text-error" />
      </ButtonIcon>

      <Modal title={`Edit Comment`} open={isEditOpen} onClose={onClose}>
        <EditCommentForm
          onClose={onClose}
          comment={{
            _id: comment._id,
            status: Number(comment.status),
          }}
        />
      </Modal>
    </>
  );
}
