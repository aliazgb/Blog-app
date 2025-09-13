import Spinner from "@/ui/Spinner";
import { JSX } from "react";

function Loading(): JSX.Element {
  return (
    <div className="grid items-center justify-center gap-x-4">
      <span className="text-lg text-secondary-500">Loading Data ...</span>
      <Spinner />
    </div>
  );
}
export default Loading;
