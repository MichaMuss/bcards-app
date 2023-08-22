import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { getUsers, toggleLockStatus, updateBusinessStatus } from "../../users/services/usersApiService";
import { useCallback } from "react";
import ROUTES from "../../routes/routesModel";
import useErrorHandler from "../../hooks/useErrorHandler";

const useAdmin = () => {
    
    const {handleGlobalError} = useErrorHandler();
    
    const navigate = useNavigate();
    
    useAxios();

    const hardenResponse = (response) => {

        if(response?.status && (response.status===403 || response.status===401))
            navigate(ROUTES.LOGIN);
        else
            handleGlobalError(response?.data);


    }
    const handleUpdateBusinessStatus = useCallback(async (id) => {
        try{
            const res = await updateBusinessStatus(id);
            return res;
        }catch(error){
          handleGlobalError(error)
        }
    },[updateBusinessStatus]);
  
    const handleToggleLockStatus = useCallback(async (id) => {
      try{
          const res = await toggleLockStatus(id);
          return res;
      }catch(error){
        handleGlobalError(error)
      }
    },[toggleLockStatus]);

    const handleGetUsers = useCallback(async () => {
        
        try {

          const users = await getUsers();
          return users;

        } catch (response) {
            
            hardenResponse(response);
            
        return Promise.reject(response?.data);

        }
        
      },[getUsers, hardenResponse]);

    return ({
            handleUpdateBusinessStatus,
            handleToggleLockStatus,
            handleGetUsers,
            });
}
export default useAdmin;