import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarItemsAprende from '../components/AgregarItemsAprende';
import Aprende from '../components/Aprende';
import Curiosidades from '../components/Curiosidades';
import Vacunas from '../components/curiosidades/Vacuna';
import HomeApp from '../components/HomeApp';
import HomePrincipal from '../components/HomePrincipal';
import Footer from '../components/lading/Footer';
import NavBarApp from '../components/NavBarApp';



const DashboardRoute = () => {
    return (

        <>
            <NavBarApp />
            <Routes>
                <Route path="/" element={<HomePrincipal />} />
                <Route path="/tareas" element={<HomeApp />} />
                <Route path="/aprende" element={<Aprende />} />
                <Route path="/addItemAprende" element={<AgregarItemsAprende />} />
                <Route path="/curiosidades" element={<Curiosidades />} />
                <Route path="/vacunas" element={<Vacunas />} />
                {/* <Route path="/cargarApi" element={<TraerAPi/>} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>

    );
};

export default DashboardRoute;