
import fetch from "isomorphic-fetch";
import { API } from "../config";

// signup 
export const signup = user => {
  return fetch(`${API}/signup`, {
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

//signin
export const signin = user => {
  return fetch(`${API}/signin`, {
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


  return fetch(`${API}/signout`, {
    method: "GET"
  })
    .then(response => {
      console.log("signout success");
    })
    .catch(err => console.log(err));
};

