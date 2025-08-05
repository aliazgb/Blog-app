import ButtonIcon from "@/ui/ButtonIcon";

import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Author from "./Author";

function PostInterAction({ post }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <ButtonIcon variant={"secondary"}>
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{post.commentsCount}</span>
        </ButtonIcon>
        <ButtonIcon variant={"red"}>
          <HeartIcon />
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
