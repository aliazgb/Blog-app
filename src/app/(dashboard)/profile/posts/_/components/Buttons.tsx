"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";
import useDeletePost from "../../create/_/useDeletePost";


interface PostSummary {
  _id: string;
  title: string;
}

interface DeletePostsProps {
  post: PostSummary;
}

interface UpdatePostProps {
  id: string;
}

export function CreatePost(): JSX.Element {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">Create post</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ post: { title, _id: id } }: DeletePostsProps) {
  const [open, setOpen] = useState(false);
  const { deletePost } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)} title={title}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <ConfirmDelete
          resourceName={title}
          onClose={() => setOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            setOpen(false);
            // deletePost(id, { onSuccess: router.refresh() });
            deletePost(id, { onSuccess: () => router.refresh() });
          }}
        />
      </Modal>
    </>
  );
}

export function EditPost({ id }: UpdatePostProps) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
