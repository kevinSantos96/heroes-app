import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                {/* <Route path="/login" element={<LoginScreen/>} /> */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                }/>
                <Route path="/*" element={
                    /*Privartizar la ruta*/
                    <PrivateRouter> 
                        <DashboardRoutes/>
                   </PrivateRouter>} 
                />
                {/* <Route path="/*" element={<DashboardRoutes/>} /> */} 
            </Routes>
        </BrowserRouter>
    )
}
