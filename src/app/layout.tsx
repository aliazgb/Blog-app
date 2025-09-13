import inter from "@/constants/localFont";
import AuthProvider from "@/context/AutchContext";
import { DarkModeProvier } from "@/context/DarkModeContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <body className="min-h-screen"> */}
      <body className={`min-h-screen ${inter.variable}`}>
        <DarkModeProvier>
          <Toaster />
          <ReactQueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReactQueryProvider>
        </DarkModeProvier>
      </body>
    </html>
  );
}
