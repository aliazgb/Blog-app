import Link from "next/link";
import { JSX } from "react";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface CategoryResponse {
  data: {
    categories: Category[];
  };
}

async function CategoryList(): Promise<JSX.Element> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  }: CategoryResponse = await res.json();
  return (
    <ul className="space-y-4">
      <Link href={"/blogs"}>All</Link>
      {categories.map((categorie) => {
        return (
          <li key={categorie._id}>
            <Link
              href={`/blogs/category/${categorie.slug}`}
              className="hover:text-primary-900"
            >
              {categorie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
