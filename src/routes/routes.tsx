import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'antd';
import { MainLayout } from '../layouts/MainLayout';
import { EmployeeProfileTabs } from '../components/EmployeeProfileTabs';

import { WelcomePage } from '../pages/WelcomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { EmployeesPage } from '../pages/EmployeesPage';
import { EmployeesProfilePage } from '../pages/EmployeesProfilePage';
import { MainPage } from '../pages/MainPage';
import { Paths } from '@utils/Paths';
import { AuthPage } from '../pages/AuthPage';
import { auth } from '@utils/consts';

export const routes = (
    <Routes>
        <Route index={true} path='/' element={<WelcomePage />} />
        <Route path={Paths.MAIN} element={auth ? <MainPage /> : <Navigate to={Paths.AUTH} />} />
        <Route path={Paths.AUTH} element={auth ? <Navigate to={Paths.MAIN} /> : <AuthPage />}>
            <Route
                path={Paths.REGISTRATION}
                element={auth ? <Navigate to={Paths.MAIN} /> : <AuthPage />}
            />
        </Route>
        {/* <Route path={Paths.AUTH} element={<Layout />}>
            <Route index={true} element={<WelcomePage />} />
            <Route element={<MainLayout />}>
                <Route path={Paths.EMPLOYEES} element={<EmployeesPage />} />
                <Route path={`${Paths.EMPLOYEES}/:employeeId`} element={<EmployeesProfilePage />}>
                    <Route index={true} element={<EmployeeProfileTabs />} />
                    <Route path=':tabName' element={<EmployeeProfileTabs />} />
                </Route>
                <Route
                    path={Paths.HANDBOOKS}
                    element={<Navigate to={Paths.HANDBOOKS_RATE_CONSTANTS} />}
                />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Route> */}
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);
