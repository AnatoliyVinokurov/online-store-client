import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Routes, Route, and useNavigate
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
    const { user } = useContext(Context); // Use useContext to access the context
    console.log(user);
    const navigate = useNavigate(); // Import useNavigate

    if (!user.isAuth) {
        navigate('/login'); // Redirect to the login page if not authenticated
    }

    return (
        <Routes>
            {authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};

export default AppRouter;
