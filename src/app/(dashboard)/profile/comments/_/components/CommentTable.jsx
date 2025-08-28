import { getAllCommentsApi } from "@/services/commentService";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { Fragment } from "react";
import CommentRow from "./CommentRow";

async function CommentsTable() {
  const { comments } = await getAllCommentsApi();
  if (!comments.length) return <Empty resourceName="Comments" />;

  let index = 1;

  const normalizeComment = (comment) => {
    index++;
    return {
      index,
      comment: {
        _id: comment._id,
        content: { text: comment.content?.text ?? comment.text ?? "" },
        user: { name: comment.user?.name ?? comment.userName ?? "Unknown" },
        createdAt: comment.createdAt,
        status: comment.status,
        answers: comment.answers?.map(normalizeComment),
      },
    };
  };

  const normalizedComments = comments.map(normalizeComment);

  return (
    <Table>
      <Table.Header>
        <th className="w-4 text-center">#</th>
        <th>Text</th>
        <th>Author</th>
        <th>Created At</th>
        <th>Status</th>
        <th>Actions</th>
      </Table.Header>
      <Table.Body>
        {normalizedComments.map((commentData) => (
          <Fragment key={commentData.comment._id}>
            <CommentRow {...commentData} />
            {commentData.comment.answers?.map((answerData) => (
              <CommentRow key={answerData.comment._id} {...answerData} />
            ))}
          </Fragment>
        ))}
      </Table.Body>
    </Table>
  );
}

export default CommentsTable;
