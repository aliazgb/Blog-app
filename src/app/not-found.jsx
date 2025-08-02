"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            The page you're looking for couldn't be found
          </h1>
          <button
            onClick={moveBack}
            className="flex items-center gap-x-2 text-secondary-500"
          >
            <ArrowLeftIcon className="w-6 h-6 text-primary-900" />
            <span> Go back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
