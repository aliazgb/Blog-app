import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import { Category } from "types/ApiTypes";

export function useCategories(): {
  transformedCategories: { label: string; value: string }[];
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["category"],
    queryFn: getCategoryApi,
  });

  const categories: Category[] = data || [];


  const transformedCategories = categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  return { transformedCategories, isLoading };
}
