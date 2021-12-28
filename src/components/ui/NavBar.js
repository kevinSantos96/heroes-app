
import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import './navBar.css'
export const Navbar = () => {
 
    const {user, dispatch} = useContext(AuthContext)
    const navigate =useNavigate();
    // console.log(user);
    const handleLogout = ()=>{
       
        dispatch({
            type:types.logout
        })
        navigate('/login',{
            replace:true
        })
        // console.log('logout');
    } 

    
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <div className='container-fluid'>
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <img src="/assets/anime-logo.jpg" alt="Logo"  className="rounded-pill"/>
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className={ ({isActive})=>'nav-item nav-link' + (isActive? 'active': '')} 
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink 
                            className={ ({isActive})=>'nav-item nav-link' + (isActive? 'active': '')} 
                            to="/dc"
                        >
                            DC
                        </NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink 
                            className={ ({isActive})=>'nav-item nav-link' + (isActive? 'active': '')} 
                            to="/"
                        >
                            Anime
                        </NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink 
                            className={ ({isActive})=>'nav-item nav-link' + (isActive? 'active': '')} 
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className='nav-item nav-link text-info'>
                            {user.name}
                        </span>
                        <button
                            className="nav-item nav-link btn" 
                            onClick={handleLogout}>
                        Logout
                        </button>
                    </ul>
                </div>


            </div>
            
        </nav>
    )
}