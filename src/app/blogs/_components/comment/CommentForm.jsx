"use client";


import { createComment } from "@/lib/action";
import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

function CommentForm({ postId, parentId }) {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            action={createComment.bind(null, postId, parentId)}
          >
            <TextArea
              name="text"
              label="comment"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <Button>Confirm</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CommentForm;
