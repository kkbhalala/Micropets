import React from "react";
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar.component';

export const AdminDashboard = () => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <Sidebar pathName={pathName} />
    )
}