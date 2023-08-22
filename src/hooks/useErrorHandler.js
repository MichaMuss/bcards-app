import { useCallback } from "react";
import { useSnack } from "../providers/SnackBarProvider"

const useErrorHandler = () => {
    
    const setSnack = useSnack();    
    
    const handleGlobalError = useCallback((errorMessage) => {
        if (errorMessage)
            if(process.env.NODE_ENV==="production"){
                const colonIndex = errorMessage.lastIndexOf(":");
                if (colonIndex > 0){
                    setSnack("error", errorMessage.substr(colonIndex));
                }
            }else{
                    setSnack("error", errorMessage);
            }
        else
            setSnack("error","Something went wrong. Possibly a server problem or the internet connection");
    }, []);

    return ({handleGlobalError});

}
export default useErrorHandler;
