import "@/styles/globals.css";
import Button from "@/ui/Button";
import Link from "next/link";

function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md">
          Welcome to Your Blog Manager
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Create, manage, and explore blogs in a beautifully simple interface.
        </p>

        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <Link href="/blogs">
            <Button>Read Blogs</Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline">Manage Blogs</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
