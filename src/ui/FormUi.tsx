"use client";

import { ReactNode } from "react";

interface FormUiProps {
  children: ReactNode;
}

function FormUi({ children }: FormUiProps) {
  return (
    <div className="w-full rounded-2xl    backdrop-blur-xl p-10  relative z-10">
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-600 rounded-full blur-sm opacity-70"></div>
      <div className="absolute bottom-[-50px] right-[-40px] w-60 h-60 bg-orange-500 rounded-full blur-sm opacity-70"></div>
      <div className=" max-w-md rounded-2xl  bg-gray-600/40 backdrop-blur-xl p-10  relative z-10">
        {children}
      </div>
    </div>
  );
}

export default FormUi;
