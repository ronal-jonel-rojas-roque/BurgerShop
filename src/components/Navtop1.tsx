import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";

export default function NavTop1() {
    return (
        <div>
            <nav className='web-top-nav '>
                <div className='containerNav1'>
                    <div className="web-contacts-left">
                        <div className="web-navbar">
                            <ul className="web-nav"></ul>
                        </div>
                    </div>
                    <div className="web-contacts-right">
                        <div className="web-navbar">
                            <ul className="web-nav">
                                <li className="main-menu-item">
                                    <a href="#" className="menu-link ">
                                        <span>Contacto</span>
                                    </a>
                                </li>
                                <li className="single-icon">
                                    <a href="#" rel="nofollow noindex noreferrer" target="_blank" className="web-contact-icon">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className="single-icon">
                                    <a href="#" rel="nofollow noindex noreferrer" target="_blank" className="web-contact-icon" >
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li className="single-icon">
                                    <a href="#" rel="nofollow noindex noreferrer" target="_blank" className="web-contact-icon">
                                        <FaTripadvisor />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
