import api from "./axios";

import { API_ENDPOİNTS } from "../endpoints";

export const authService = {
  signUp(userData) {
    return api.post(API_ENDPOİNTS.AUTH.SIGN_UP, userData);
  },
  signIn(data) {
    return api.post(API_ENDPOİNTS.AUTH.SIGN_IN, data);
  },
  logout(){
    return api.post(API_ENDPOİNTS.AUTH.LOGOUT);
  }
};
