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
    <html lang="en">
      <body className="min-h-screen ">
        <AuthProvider>
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
