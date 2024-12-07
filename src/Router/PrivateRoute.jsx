import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    
    

        if(loading){
            return <Loading></Loading>
        }
        if(user && user?.email){
            return children;
        }
        return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;