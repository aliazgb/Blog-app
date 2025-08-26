import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">Create post</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost() {
  return (
      <ButtonIcon variant="outline">
        <TrashIcon className="text-error" />
      </ButtonIcon>
  );
}

export function EditPost({id}) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon>
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}
