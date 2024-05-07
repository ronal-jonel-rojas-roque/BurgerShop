import React from 'react'
import "./part5home.css"
import { Link } from 'react-router-dom'
export default function Part5Home() {
    return (
        <div>
            <div className="contentpart5">
                <div className="containerpart5  ">
                    <div className="izqpart5"></div>
                    <div className="medpart5" >
                        <div className="text-con-part5 ">
                            <Link to="/Filosofia" rel="" className="web-btn ">
                                <span>CONOCE LA FILOSOFÍA BREAKFAST AQUÍ</span>
                                <span className="web-btn-effect-bg"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="derpart5"></div>
                </div>
            </div>
        </div>
    )
}
