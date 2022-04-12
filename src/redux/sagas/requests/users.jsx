import axios from "axios";

export function fetchSearchUsers() {
  return axios.get(`https://reqres.in/api/users`);
}

export function fetchSearchUserId({ id }) {
  return axios.get(`https://reqres.in/api/users/${id}`);
}
