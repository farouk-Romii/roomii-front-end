import { useState } from "react";
import Context from "./Context";

export default function ContextProvider({children}){

    
   
   
    const [userData, setUserData] = useState(null);
    const [isLogin,setIsLogin] = useState(false)
    const state = {
        userData,
        setUserData,
        isLogin,
        setIsLogin
    }

    return (
        <Context.Provider value ={state}>
            {children}
        </Context.Provider>
    )
}