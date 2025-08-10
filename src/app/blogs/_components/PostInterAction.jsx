"use client";

import ButtonIcon from "@/ui/ButtonIcon";

import { likePostApi } from "@/services/postServices";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Author from "./Author";

function PostInterAction({ post }) {
  const router = useRouter();
  const handleLikePost = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <ButtonIcon variant={"secondary"}>
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{post.commentsCount}</span>
        </ButtonIcon>
        <ButtonIcon variant={"red"} onClick={() => handleLikePost(post._id)}>
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        </ButtonIcon>
        <ButtonIcon variant={"primary"}>
          <BookmarkIcon />
        </ButtonIcon>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-secondary-500">{post.author.name}</span>
        <Author {...post.author} />
      </div>
    </div>
  );
}

export default PostInterAction;
