import React from 'react';
import { Routes, Route } from "react-router-dom";

import { DcScreen } from '../components/dc/DcScreen';
import { Heroscreen } from '../components/hero/Heroscreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Searchscreen } from '../components/search/Searchscreen';
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar/>
        <div className='container'>
        <Routes>
                
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<Searchscreen />} />
                <Route path="/hero/:heroeId" element={<Heroscreen />} />
                <Route path="/" element={<MarvelScreen />} />
            </Routes>  
        </div>
          
        </>
    )
}
