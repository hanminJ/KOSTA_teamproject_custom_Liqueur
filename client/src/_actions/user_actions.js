import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  ON_SUCCESS_BUY,
} from "./types";
import { USER_SERVER } from "./Config.js";

//로그인 요청시 - get auth/naver
export function loginUser(dataToSubmit) {
  const request = axios
    .get(`${USER_SERVER}/auth/naver`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

//로그아웃시 //get /logout
export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

