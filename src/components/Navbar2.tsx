import React, { useState } from 'react'
import NavTop1 from './Navtop1';
import logo from "../assets/images/extras/logo/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import "./nav.css"
import "./nav2.css"

export default function Navbar2() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            <NavTop1></NavTop1>
            <nav className={`navbar ${menuVisible ? 'menu-active' : ''}`}>
                <div className="navbar-content">
                    <div className="navbar-links">
                        <ul className="navbar-desktop-links">
                            <Link to="/Productos" className='link Links'>
                                <span>Productos</span>
                            </Link>
                            <Link to="/Filosofia" className='link Links'>
                                <span> Filosofía</span>
                            </Link>
                        </ul>
                    </div>
                    <div className="navbar-logo-center">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>

                        </div>
                    </div>
                    <div className="navbar-actions">
                        <div className='navbar-desktop-links'>
                            <Link to="/Reserva" className='link Links'>
                                <span>Reserva</span>
                            </Link>
                        </div>
                        <div className='navbar-desktop-links'>
                            <Link to="/Pedidos" className='link Links'>
                                <span> Pide Online</span>
                            </Link>
                        </div>
                        <div className='navbar-desktop-links navbar-cart'>
                            <Link to="" className='link'>
                                <CiShoppingCart />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-mobile-menu-icon" >
                        <div className="navbar-cart">
                            <CiShoppingCart />
                        </div>
                        <div onClick={toggleMenu} className={`toggle-icon ${menuVisible ? 'toggler-icon' : ''}`}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                    {menuVisible && (
                        <ul className={`navbar-mobile-menu ${menuVisible ? 'menu-active' : ''}`}>
                            <Link to="" className='Link-list-mobile'>Productos</Link>
                            <Link to="" className='Link-list-mobile'>Filosofía</Link>
                            <Link to="" className='Link-list-mobile'>Reserva</Link>
                            <Link to="" className='Link-list-mobile'>Pide Online</Link>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}
