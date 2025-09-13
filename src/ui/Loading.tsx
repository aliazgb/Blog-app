import React from "react";

export default function LinearIndeterminate() {
  return (
    <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
      <div className="h-full bg-blue-500 animate-loading-bar"></div>
    </div>
  );
}
