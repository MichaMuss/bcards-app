import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { 
  getUser as getRemoteUser, 
  login, 
  signup, 
  updateUser, 
  getProfile, 
  updatePassword } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
       } from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackBarProvider";
import  useErrorHandler from "../../hooks/useErrorHandler";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signupSuccess,setSignupSuccess] = useState();

  const navigate = useNavigate();
  const  setSnack = useSnack();
  const { user, setUser, setToken } = useUser();
  const { handleGlobalError } = useErrorHandler();
  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
      return;
    } catch (error) {
      if(error)
        requestStatus(false, error, null); 
      else
      handleGlobalError(error);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    requestStatus(false, null, null);
  }, [user]);

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  const handleSignup = useCallback(async (data) => {
    try {
      setSignupSuccess(false);
      requestStatus(true, null, null);
      const resData = await signup({...normalizeUser(data)});
      setSignupSuccess(true);
      return await handleLogin(data);
    }catch (error) {
      if(signupSuccess){
        navigate(ROUTES.LOGIN);
      }else{
        requestStatus(false,error,null);
      }

    }
  },[signup]);

  

  const handleGetProfile = useCallback(async () => {
      try {
        setError(null);
        setLoading(true);
        const profile = await getProfile();
        setLoading(false);
        return profile;  
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      
  },[getProfile]);

  const handleGetUser = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const reqUser = await getRemoteUser(id);
      return reqUser;  
    } catch (error) {
      handleGlobalError(error);
      setLoading(false);
      setError(error);
    }
    
},[getRemoteUser]);

  const handleUpdateUser = useCallback(async (userId, data) => {
    try {
      const user = await updateUser(userId, normalizeUser(data));
      return user;  
    } catch (error) {
      handleGlobalError(error);
    }
    
  },[updateUser]);

  
  const handleUpdatePassword = useCallback(async (userId, password) => {
    try{
      const res = await updatePassword(userId, password);
      setSnack("success","Password updated successfuly");
      return res;
    }catch(error){
      handleGlobalError(error);
    }
  },[updatePassword]);
  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleGetProfile,
    handleUpdateUser,
    handleUpdatePassword,
  };
};

export default useUsers;
