import Header from "@/components/Header";
import AuthProvider from "@/context/AutchContext";
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
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
