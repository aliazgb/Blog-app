import localFont from "next/font/local";

 const inter = localFont({
    src: [
      {
        path: "../../public/fonts/Inter-Regular.woff2", 
        style: "normal",
      },
      {
        path: "../../public/fonts/Inter-Italic.woff2",
        style: "italic",
      },
    ],
    variable: "--font-inter",
    display: "block",
    style:"normal"
  });
  export default inter