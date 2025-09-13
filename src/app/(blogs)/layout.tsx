import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
