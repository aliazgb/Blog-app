"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { JSX } from "react";

function MoveBack(): JSX.Element {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-start  mb-12">
        <div>
     
          <button
            onClick={moveBack}
            className="flex items-center gap-x-2 text-secondary-500"
          >
            <ArrowLeftIcon className="w-6 h-6 text-primary-900" />
            {/* <span> Go back</span */}
          </button>
        </div>
      </div>
    </div>
  );
}
export default MoveBack;