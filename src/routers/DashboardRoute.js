import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarItemsAprende from '../components/AgregarItemsAprende';
import Entretenimiento from '../components/Entretenimiento';
import Colicos from '../components/curiosidades/Colicos';
import Destetar from '../components/curiosidades/Destetar';
import HomeApp from '../components/HomeApp';
import HomePrincipal from '../components/HomePrincipal';
import Footer from '../components/lading/Footer';
import NavBarApp from '../components/NavBarApp';
import Vacuna from '../components/curiosidades/Vacuna';
import Enfermedades from '../components/curiosidades/Enfermedades';
import AprendeMas from '../components/AprendeMas';
import EntretenimientoMamaAudio from '../components/EntretenimientoMamaAudio';
import EntretenimientoBebe from '../components/EntretenimientoBebe';
import EntretenerBBVideos from '../components/entretenerBebe/EntretenerBBVideos';
import EntretenerMamaVideos from '../components/entretenerBebe/EntretenerMamaVideos';
import QueDeboSaber from '../components/curiosidades/QueDeboSaber';
import Lactancia from '../components/curiosidades/Lactancia';
import Perfil from '../components/Perfil';
import PosicionesAlimentar from '../components/curiosidades/PosicionesAlimentar';



const DashboardRoute = () => {
    return (
        <>
            <NavBarApp />
            <Routes>
                <Route path="/" element={<HomePrincipal />} />
                <Route path="/tareas" element={<HomeApp />} />
                <Route path="/entretenimiento" element={<Entretenimiento />} />
                <Route path="/entretenimientoMamaAudio" element={<EntretenimientoMamaAudio />} />
                <Route path="/entretenimientoMamaVideo" element={<EntretenerMamaVideos />} />
                <Route path="/entretenimientoBebeAudio" element={<EntretenimientoBebe />} />
                <Route path="/entretenimientoBebeVideo" element={<EntretenerBBVideos />} />
                <Route path="/addItemAprende" element={<AgregarItemsAprende />} />
                <Route path="/colicos" element={<Colicos />} />
                <Route path="/destete" element={<Destetar />} />
                <Route path="/vacunas" element={<Vacuna />} />
                <Route path="/enfermedades" element={<Enfermedades />} />
                <Route path="/aprendemas" element={<AprendeMas />} />
                <Route path="/queDeboSaber" element={<QueDeboSaber />} />
                <Route path="/lactancia" element={<Lactancia />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/posicionAlimentar" element={<PosicionesAlimentar />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>

    );
};

export default DashboardRoute;