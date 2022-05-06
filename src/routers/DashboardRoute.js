import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarItemsAprende from '../components/AgregarItemsAprende';
import Aprende from '../components/Aprende';
import Colicos from '../components/curiosidades/Colicos';
import Destetar from '../components/curiosidades/Destetar';
import HomeApp from '../components/HomeApp';
import HomePrincipal from '../components/HomePrincipal';
import Footer from '../components/lading/Footer';
import NavBarApp from '../components/NavBarApp';
import Vacuna from '../components/curiosidades/Vacuna';
import Enfermedades from '../components/curiosidades/Enfermedades';
import AprendeMas from '../components/AprendeMas';



const DashboardRoute = () => {
    return (
        <>
            <NavBarApp />
            <Routes>
                <Route path="/" element={<HomePrincipal />} />
                <Route path="/tareas" element={<HomeApp />} />
                <Route path="/entretenimiento" element={<Aprende />} />
                <Route path="/addItemAprende" element={<AgregarItemsAprende />} />
                <Route path="/colicos" element={<Colicos />} />
                <Route path="/destete" element={<Destetar />} />
                <Route path="/vacunas" element={<Vacuna />} />
                <Route path="/enfermedades" element={<Enfermedades />} />
                <Route path="/aprendemas" element={<AprendeMas />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>

    );
};

export default DashboardRoute;