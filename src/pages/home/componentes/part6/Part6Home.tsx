import React from 'react'
import "./part6home.css"
import { Link } from 'react-router-dom'
export default function Part6Home() {
    return (
        <div>
            <div className='containerpart6'>
                <div className="contentpart6">
                    <div className="displaypart6">
                        <div className="izqpart6">
                            <div className="textsupizq">
                                <h2>ENTONCES, ¿TE APETECE DESCUBRIR OTRA ALIMENTACIÓN?</h2>
                            </div>
                            <div className="lineCenter"></div>
                            <div className="lineCenterFun">
                                <h2>QUIERES PROBAR ALGO NUEVO?</h2>
                            </div>
                            <div className="lineCenter"></div>
                        </div>
                        <div className="derpart6">
                            <div className="textsubder">
                                <span>¿Otra forma de vivir, saborear y disfrutar en familia y con tus amigos?</span><br />
                                <span>
                                    <strong>EN NUESTRO LOCAL O EN TU HOGAR.
                                    </strong>
                                </span>
                            </div>
                            <div className="padd"></div>
                            <div className="btn-reserv">
                                <Link to='/Reserva' className='btn-link-reserva'>
                                    Reserva ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
