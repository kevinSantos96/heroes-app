import { useContext} from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";

import { types } from "../../types/types";


export const LoginScreen = () => {

    const navigate = useNavigate();

    const  {dispatch} =useContext(AuthContext);//importmos el context para traer el dispatch

    const handleLogin =()=>{

        dispatch({
            type: types.login,
            payload:{name:'Kamelli'} 
        });
            
        const lasthpath = localStorage.getItem(`lastPath`) || '/';//regresa a la ruta donde estaba

        navigate(lasthpath,{
            replace: true
        });// para que una ves ya logedo no pueda regresar atras
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={ handleLogin }>
                Login
            </button>
        </div>
    )
}
