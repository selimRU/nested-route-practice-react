import React from 'react';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';

const DashbosrdLayout = () => {
    return (
        <div className=' flex gap-[300px] container mx-auto p-10 bg-slate-400 my-5'>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashbosrdLayout;