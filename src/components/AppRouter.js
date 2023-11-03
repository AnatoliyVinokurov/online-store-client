import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    if (!user.isAuth) {
        navigate('/login');
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
