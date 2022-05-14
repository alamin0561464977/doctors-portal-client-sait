import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const Navbar = () => {
    const NavbarLink = <>
        <li><Link className='mx-1' to='/'>Home</Link></li>
        <li><Link className='mx-1' to='/appointment'>Appointment</Link></li>
        <li><Link className='mx-1' to='/about'>About</Link></li>
        <li><Link className='mx-1' to='/reviews'>Reviews</Link></li>
        <li><Link className='mx-1' to='/contactUs'>Contact Us</Link></li>
        <li><Link className='mx-1' to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-[#647393] text-[#ffff] container mx-auto justify-start">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavbarLink}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl"><span className='logo'>A<span className='d'>D</span>C</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {NavbarLink}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;