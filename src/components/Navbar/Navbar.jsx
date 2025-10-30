import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
       <nav className='flex justify-between items-center'>
        <nav></nav>
        <nav className='nav flex gap-5 text-accent'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"/carrier"}>Carrier</NavLink>
        </nav>
        <nav className='flex gap-3 items-center'>
            <img src={user} alt="" />
            <button className='btn btn-primary px-10'>Login</button>
        </nav>
       </nav>
    );
};

export default Navbar;