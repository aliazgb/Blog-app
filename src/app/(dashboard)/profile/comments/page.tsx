import Fallback from "@/ui/Fallback";
import { JSX, Suspense } from "react";
import CommentsTable from "./_/components/CommentTable";

async function CommentPage(): Promise<JSX.Element> {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          Comments list
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
}
export default CommentPage;
