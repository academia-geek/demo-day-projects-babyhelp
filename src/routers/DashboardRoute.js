import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Aprende from '../components/Aprende';
import HomeApp from '../components/HomeApp';
import NavBarApp from '../components/NavBarApp';



const DashboardRoute = () => {
    return (
       
             <>
            <NavBarApp/>
                <Routes>
                    <Route path="/" element={<HomeApp/>} />
                    <Route path="/aprende" element={<Aprende/>} />
                    {/* <Route path="/list" element={<List/>} />
                    <Route path="/cargarApi" element={<TraerAPi/>} /> */}
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;