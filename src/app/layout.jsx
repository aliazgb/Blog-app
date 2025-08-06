import Header from "@/components/Header";
import "@/styles/globals.css";
import { generateMetaData } from "./blogs/[postSlug]/page";
export const metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body className="min-h-screen ">
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
