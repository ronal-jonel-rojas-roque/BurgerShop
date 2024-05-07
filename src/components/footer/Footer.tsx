import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import Logo from "../../assets/images/extras/logo/logo.png";
import "./footer.css"

export default function Footer() {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2 className='h2'>SOBRE NOSOTROS</h2>
                    <p className='p' >
                        <Link to="/Nosotros" className='contact'>
                            NOSOTROS
                        </Link>
                    </p>
                    <p className='p' >
                        <Link to="/Preguntas" className='contact'>
                            AVISO LEGAL
                        </Link>
                    </p>
                    <p className='p' >
                        <Link to="/Cambios" className='contact'>
                            POLÍTICA DE PRIVACIDAD
                        </Link>
                    </p>
                    <p className='p' >
                        <Link to="/Tienda" className='contact'>
                            POLÍTICA DE COOKIES
                        </Link>
                    </p>
                </div>
                <div className="box">
                    <h2 className='h2'>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="https://www.facebook.com/RonalRojasRoqueJ" className="fa fa-facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/ronalrojasroquej/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram />
                        </a>
                        <a href="https://twitter.com/ronalrojasroqj" className="fa fa-twitter" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.youtube.com/@ronalrojasroquej" className="fa fa-youtube" target="_blank" rel="noopener noreferrer">
                            <SlSocialYoutube />
                        </a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2024 <b>Ronal Rojas</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer >
    )
}
