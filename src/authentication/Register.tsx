import React, { useState } from 'react'
import "../styles/autentication.css";
import { Link } from 'react-router-dom';
import { MdOutlineContactMail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='container-autentication'>
            <div className="container-form register">
                <div className="form-information form-information-register">
                    <div className="form-information-childs">
                        <h2>Crear una Cuenta</h2>
                        <form className="form form-register">
                            <div className="inputbox">
                                <MdOutlineContactMail className='icon-login' />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="">Usuario</label>

                            </div>
                            <div className="inputbox">
                                <MdOutlineContactMail className='icon-login' />
                                <input type="email" name="userEmail" />
                                <label htmlFor="">Correo Electronico</label>

                            </div>
                            <div className="inputbox">
                                {showPassword ? (
                                    <FaEye className='icon-login' onClick={togglePasswordVisibility} />
                                ) : (
                                    <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility} />
                                )}                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="">Contraseña</label>

                            </div>

                            <input type="submit" value="Registrarse" />
                        </form>
                    </div>
                </div>
                <div className="information information-Register">
                    <div className="info-childs">
                        <h2>Bienvenido</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <Link to="/" className="sign-up">Iniciar Sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
