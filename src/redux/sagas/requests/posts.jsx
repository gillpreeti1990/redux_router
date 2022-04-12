import axios from "axios";

//api call for getimages
export function fetchPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}
