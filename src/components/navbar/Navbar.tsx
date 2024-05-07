import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/images/extras/logo/logo.png";


export default function Navbar() {
    const [active, setActive] = useState("menu");
    const [icon, setIcon] = useState("toggler");
    const [showProfileText, setShowProfileText] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setShowProfileText(false);
            } else {
                setShowProfileText(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navToggle = () => {
        if (active === "menu") {
            setActive("menu active");
        } else setActive("menu");

        // Icon Toggler
        if (icon === "toggler") {
            setIcon("toggler toggle");
        } else setIcon("toggler");
    };

    return (
        <div className='navbar-big'>
            <div className="nav">
                <Link to="/Home">
                  <img src={logo} alt="" />  
                </Link>
                
            </div>
            <div className="search-box">
                <form>
                    <input type="text" name="search" id="srch" placeholder="Search" />
                    <button type="submit">
                        <IoSearchSharp />
                    </button>
                </form>
            </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className={active}>
                <Link to="/Productos" className='Linklist'>Productos</Link>
                <Link to="" className='Linklist'>Blog</Link>
                <Link to="" className='Linklist'>Contactanos</Link>
            </ul>
        </div>
    );
}