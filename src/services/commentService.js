
import http from "./httpService";

export async function commentApi( data, options) {
  return http.post("/comment/add", data,options).then(({ data }) => data.data);
}


export async function getAllCommentsApi(option ={}) {
  return http.get("/comment/list",option).then(({ data }) => data.data);
}
