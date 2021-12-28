import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

export const PrivateRouter = ({children}) => {

    const{user}=useContext(AuthContext)
    
   const location = useLocation();
   const {pathname, search} = location

   localStorage.setItem('lastPath',pathname + search); //guardar la ruta actual en el lcoalStorage


    // return user.logged ? children: <Navigate to="/login"/>
    if(user.logged){
        return children;
    }else{
        alert('Logeate Primero');
        return  <Navigate to="/login"/>
        
    }
}
