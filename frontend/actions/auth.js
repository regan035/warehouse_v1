
import fetch from "isomorphic-fetch";
import axios from "axios";
import { API } from "../config";

// signup 
// export const signup = user => {
//   return fetch(`${API}/auth/signup`, {
//   //return fetch(`auth/signup`, {
//     method: "POST",
//     // headers: {
//     //   Accept: "application/json",
//     //   "Content-Type": "application/json"
//     // },
//     body: user
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

export const signup = user => {
  axios.post(`${API}/auth/signup`, user).then(res=>console.log(res))
}

//signin
export const signin = user => {
  return fetch(`auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//signout
export const signout = next => {


  return fetch(`auth/signout`, {
    method: "GET"
  })
    .then(response => {
      console.log("signout success");
    })
    .catch(err => console.log(err));
};

