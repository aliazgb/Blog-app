import { CommentPayload, CommentTypeService, CommentUpdatePayload } from "types/ApiTypes";
import { AxiosRequestConfig } from "axios";
import http from "./httpService";

export async function commentApi(
  data: CommentPayload,
  options?: AxiosRequestConfig
): Promise<{ message: string }> {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}
export async function deleteCommentApi(
  { id, options }: { id: string, options?: AxiosRequestConfig }): Promise<{ message: string }> {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function updateCommentApi(
  { id, data }: CommentUpdatePayload,
  options: AxiosRequestConfig = {}
): Promise<{ message: string }> {
  return http
    .patch(`/comment/update/${id}`, data, options)
    .then(({ data }) => data.data);
}

export async function getAllCommentsApi(
  option: AxiosRequestConfig = {}
): Promise<CommentTypeService> {
  return http.get("/comment/list", option).then(({ data }) => data.data);
}
