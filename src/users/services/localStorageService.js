import jwtDecode from "jwt-decode";

const TOKEN = "token";
const DARK_MODE = "darkMode";
export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getDarkMode = () => localStorage.getItem(DARK_MODE) === "yes" ? true : false;

export const setDarkMode = (value) => localStorage.setItem(DARK_MODE, value ? "yes" : "no");

export const getUser = () => {
  try {
    const myToken = localStorage.getItem(TOKEN);
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};
