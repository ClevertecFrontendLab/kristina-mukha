import { Paths } from '@utils/Paths';
import { auth } from '@utils/consts';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const WelcomePage: React.FC = () => {
    return auth ? <Navigate to={Paths.MAIN} /> : <Navigate to={Paths.AUTH} />;
};
