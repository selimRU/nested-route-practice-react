import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=' flex flex-col gap-5'>
            <p>Dashboard</p>
            <Link to='/dashboardLayout/profile'>Profile</Link>
            <Link to='/dashboardLayout/editProfile'>Edit Profile</Link>

        </div>
    );
};

export default Dashboard;