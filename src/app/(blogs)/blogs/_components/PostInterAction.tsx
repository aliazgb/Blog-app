"use client";

import ButtonIcon from "@/ui/ButtonIcon";

import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import toast from "react-hot-toast";
import { PostListType } from "types/ApiTypes";
import Author from "./Author";

interface PostInteractionProps {
  post: PostListType;
}

function PostInterAction({ post }: PostInteractionProps): JSX.Element {
  const router = useRouter();

  const handleLikePost = async (postId: string) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      console.log(post);
      router.refresh();
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message || "An error occurred");
    }
  };

  const bookmarkHandler = async (postId: string) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message || "An error occurred");
    }
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
        <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
          {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
        </ButtonIcon>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-secondary-500">{post.author.name}</span>
        <Author
          // {...post}
          name={post.author.name}
        />
      </div>
    </div>
  );
}

export default PostInterAction;
