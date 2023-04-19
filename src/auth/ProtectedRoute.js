import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate} from "react-router-dom";


const useAuth = () =>{
    const login = useSelector(state => state.auth.isLoggIn)
    const user = {LoggedIn : login}
    return user && user.LoggedIn
}


export const ProtectedRoute = ({ children }) => {
    const  user  = useAuth();
    const navigate = useNavigate()
   
   return user ? children : <Navigate to ="/login" />

};