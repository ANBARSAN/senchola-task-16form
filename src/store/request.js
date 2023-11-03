import axios from "axios";
export function requestGetUser(action) {
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/1`,
  });
}
