import React from "react";
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar.component';
import { UserDashboard } from '../../components/UserDashboard/UserDashboard.component';
import { AdminContainer } from './AdminDashboard.styles';

export const AdminDashboard = () => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <AdminContainer>
            <Sidebar pathName={pathName} />
            {pathName === '/dashboard' ? <UserDashboard/> : <></>}
        </AdminContainer>
    )
}