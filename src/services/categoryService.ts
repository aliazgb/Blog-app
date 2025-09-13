import { Category } from "types/ApiTypes";
import http from "./httpService";
// import http from "./httpService";

export async function getCategoryApi(): Promise<Category[]> {
  return http.get("/category/list").then(({ data }) => data.data as Category[]);
}
