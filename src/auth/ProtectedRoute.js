import Cookies from "universal-cookie";
import {Navigate, useLocation} from "react-router-dom";

const cookie = new Cookies();

export const ProtectedRoute = ({ children, role }) => {
    const token = cookie.get("TOKEN")
    return token ? children : <Navigate to="/login" state={{}}/>

};