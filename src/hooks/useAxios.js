import axios from "axios";
import { useEffect } from "react";
import { useSnack } from "../providers/SnackBarProvider";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {
  const { token } = useUser(); //1

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token; //2

    const requestInterceptor = axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
      axios.defaults.headers.common["x-auth-token"] = null;
    };
  }, [token]); //3
};

export default useAxios;