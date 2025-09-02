import Link from "next/link";
import { headers } from "next/headers";
import { serverFetchWithCookies } from "@/utils/fetchWithCookies";

async function CategoryList() {
  const headersList = headers();
  const cookie = headersList.get("cookie");
  const res = await serverFetchWithCookies(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, {}, cookie);
  const {
    data: { categories },
  } = await res.json();
  return (
    <ul className="space-y-4">
      <Link href={"/blogs"}>All</Link>
      {categories.map((categorie) => {
        return (
          <li key={categorie._id}>
            <Link href={`/blogs/category/${categorie.slug}`} className="hover:text-primary-900">
              {categorie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;

