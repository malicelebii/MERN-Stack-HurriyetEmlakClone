import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";
import { SERVER } from "../components/Config.js";

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post(`${SERVER}/users/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post(`${SERVER}/users/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios
    .get(`${SERVER}/users/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const logoutUser = () => {
  const request = axios
    .get(`${SERVER}/users/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};
