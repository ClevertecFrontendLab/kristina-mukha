import { Login } from '@components/Auth/Login';
import { Register } from '@components/Auth/Register';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paths } from '@utils/Paths';

export const AuthPage: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <h1>AuthPage:</h1>

            {location.pathname === `${Paths.AUTH}` ? (
                <Login />
            ) : location.pathname === `${Paths.REGISTRATION}` ? (
                <Register />
            ) : null}
        </>
    );
};
