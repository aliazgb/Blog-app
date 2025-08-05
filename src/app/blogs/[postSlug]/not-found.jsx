import Link from "next/link";

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-2xl font-semibold text-red-600 mb-8 ">
            No post found with the given criteria.
          </p>
          <Link href="/blogs" className="text-primary-900 text-lg font-bold">
            Go to the blog page?
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
