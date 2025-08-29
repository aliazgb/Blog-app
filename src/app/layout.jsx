import AuthProvider from "@/context/AutchContext";
import { DarkModeProvier } from "@/context/DarkModeContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
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
