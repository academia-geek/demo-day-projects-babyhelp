import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/lading/Home';
import Login from '../components/Login';
import PrivateRoters from '../routers/PrivateRoters'
import PublicRouters from '../routers/PublicRouters'
import DashboardRoute from '../routers/DashboardRoute'
import Register from '../components/Register';
import '../styles/appRoutes.css'
import NavBar from '../components/lading/NavBar';


const AppRouters = () => {
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <div className="espera">
                <div className="divImagen">
                    <img src="https://res.cloudinary.com/dhu8kck7f/image/upload/v1650956989/ckmbzwlkjyflf4geksva.png" width="100%" />
                </div>
            </div>
        )
    }

    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>

                <Route path="/login" element={
                    <PublicRouters isAut={isLoggedIn}>
                        <Login />
                    </PublicRouters>} />


                <Route path="/register" element={
                    <PublicRouters isAut={isLoggedIn}>
                        <Register />
                    </PublicRouters>

                } />

                <Route path="/landing" element={
                    <PublicRouters isAut={isLoggedIn}>
                        <Home/>
                    </PublicRouters>

                } />

                <Route path="/*" element={<PrivateRoters isAut={isLoggedIn}>
                    <DashboardRoute />
                </PrivateRoters>} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;