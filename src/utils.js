export const saveTokenToLocalStorage = token => {
  window.localStorage.setItem("token", token);
};
export const loadTokenFromLocalStorage = () =>
  window.localStorage.getItem("token");

export const getRequestHeaders = () => {
  const headers = {};

  headers.Authorization = `Bearer ${loadTokenFromLocalStorage()}`;

  return headers;
};
