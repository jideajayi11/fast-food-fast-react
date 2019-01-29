import { ADD_ARTICLE } from "../constants/actionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return { type: "DATA_LOADED", payload: json };
}
