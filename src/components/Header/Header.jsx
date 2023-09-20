import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' shadow-md py-10 flex justify-around'>
            <div>
                <h2 className=' text-4xl'>Kenakata.Com</h2>
            </div>
            <div className=' space-x-3'>
                <NavLink className={({ isActive }) => isActive ? 'underline bg-neutral-400 px-2 rounded-sm py-1 text-white' : ''} to='/'>Home</NavLink >
                <NavLink className={({ isActive }) => isActive ? 'underline bg-neutral-400 px-2 rounded-sm py-1 text-white' : ''} to='/about'>About</NavLink >
                <NavLink className={({ isActive }) => isActive ? 'underline bg-neutral-400 px-2 rounded-sm py-1 text-white' : ''} to='/dashboardLayout'>Dashboard</NavLink >
                <NavLink className={({ isActive }) => isActive ? 'underline bg-neutral-400 px-2 rounded-sm py-1 text-white' : ''} to='/moreProducts'>More Products</NavLink >
            </div>
        </div>
    );
};

export default Header;