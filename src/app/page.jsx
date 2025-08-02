import "@/styles/globals.css";
import Button from "@/ui/Button";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        Blog Management Application
      </h1>
      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          A place where you can fully manage a blog application!
          <br /> Build blogs, leave comments, and track all activities in your panel.
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="primary">
            <Link href="/blog">View Blogs</Link>
          </Button>
          <Button variant="outline">
            <Link href="/profile">View Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
