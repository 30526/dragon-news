import React from 'react';
import { Link, NavLink } from 'react-router';
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
            <img className='rounded-full' src={user} alt="" />
            <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>
        </nav>
       </nav>
    );
};

export default Navbar;