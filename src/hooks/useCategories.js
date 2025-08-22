import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryApi,
  });
  const { categories= [] } = data || {};
  const transformedCategories = categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  return {transformedCategories ,isLoading};
}
