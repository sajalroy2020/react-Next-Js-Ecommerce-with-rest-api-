import request from "../../utils/request";

export const login = (loginData) => {
  return request.post("/login", loginData);
};

export const signup = (regData) => {
  return request.post("/register", regData);
};

export const getProfileByToken = () => {
  return request.get("/profile");
};