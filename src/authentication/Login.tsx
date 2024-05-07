import React, { useState } from 'react';
/* import axios from 'axios'; */
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { users } from "../data/UsersData";
import "../styles/autentication.css";
import { MdOutlineContactMail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

/* interface LoginProps {
    onSuccess: () => void;
} */

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        const isUsernameEmpty = username.trim() === '';
        const isPasswordEmpty = password.trim() === '';

        if (isUsernameEmpty && isPasswordEmpty) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, completa todos los campos',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }

        if (isUsernameEmpty) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, ingresa el nombre de usuario',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }
        if (isPasswordEmpty) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Por favor, ingresa la contraseña',
                icon: 'warning',
                timer: 1000,
                timerProgressBar: true,
            });
            return;
        }

        let isUsernameCorrect = false;
        let isPasswordCorrect = false;


        const enteredUsername = username ? username.trim().toLowerCase() : '';
        const enteredPassword = password.trim();

        try {
            /*const response = await axios.post('/api/login', { username, password }); */
            const user = users.usuarios.find((user) =>
                user.username === enteredUsername && user.password === enteredPassword
            );
            /* const { data } = response; */

            if (user && user.username) {
                const userDataUsername = user.username ? user.username.toLowerCase() : '';
                if (userDataUsername === enteredUsername) {
                    isUsernameCorrect = true;
                    if (user.password === enteredPassword) {
                        isPasswordCorrect = true;
                    }
                }
            } else {
                console.log('No existen los valores');
            }

            if (isUsernameCorrect && isPasswordCorrect) {
                /* Cookies.set('userData', userData.data, { expires: 7 }); // Expira en 7 días*/
                /* setShowWelcomeModal(true); */
                Swal.fire({
                    title: 'Inicio de Sesión Exitoso',
                    text: `Bienvenido ${user?.username || 'usuario'}`,
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,

                }).then(() => {
                    navigate('/Home');
                });
            } else if (!isUsernameCorrect && !isPasswordCorrect) {
                Swal.fire({
                    title: 'Error',
                    timer: 2000,
                    text: 'Usuario o contraseña incorrectos',
                    icon: 'error',
                });
            } else if (!isUsernameCorrect) {
                Swal.fire({
                    title: 'Error',
                    timer: 2000,
                    text: 'El usuario no es correcto',
                    icon: 'error',
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    timer: 2000,
                    text: 'La contraseña no es correcta',
                    icon: 'error',
                });
            }
        } catch (error: any) {
            console.error('Error durante el inicio de sesión:', error);
            alert(`Ha ocurrido un error en la solicitud: ${error.message}`);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container-autentication'>
            <div className='container-form login' onSubmit={handleSubmit}>
                <div className="information information-login">
                    <div className="info-childs">
                        <h2>¡¡Bienvenido nuevamente!!</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <Link to="/register" className="sign-up" >Registrarse</Link>
                    </div>
                </div>
                <div className="form-information form-information-login">
                    <div className="form-information-childs">
                        <h2>Iniciar Sesión</h2>
                        <form className="form form-login">
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
                                {showPassword ? (
                                    <FaEye className='icon-login' onClick={togglePasswordVisibility} />
                                ) : (
                                    <RiEyeCloseFill className='icon-login' onClick={togglePasswordVisibility} />
                                )}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="">Contraseña</label>

                            </div>
                            <input type="submit" value="Iniciar Sesión" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
