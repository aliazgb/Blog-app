import Header from "@/components/Header";

function layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </div>
  );
}

export default layout;
