import React, { useEffect } from 'react'
import "../part2/part2home.css"
import img1 from "../../../../assets/images/extras/homeimg/part2/img1.png"
import img2 from "../../../../assets/images/extras/homeimg/part2/img2.png"
import Typed from 'typed.js';

export default function Part2Home() {

    useEffect(() => {
        // Configuración de Typed.js
        const options = {
            strings: ['Culpabilidad', 'aditivos'],
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 1500,
            cursorChar: '|',
            starDelay: 300,
            loop: true,
            showCursor: true,
            contentType: 'html',
        };

        // Inicializar Typed.js
        const typed = new Typed('.typed', options);

        // Detener la animación al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <div className='ContairnerPar2'>
                <div className="contentcontainerpart2">
                    <div className='ZindexPart2'>
                        <div className="webImageBlockContainer">
                            <img className='imgpart2' src={img1} alt="" />
                        </div>
                    </div>
                    <div className='MedioPart2'>
                        <div className="contentMedPart2">
                            <div className="divImagecontent">
                                <div className='topcontentpart2'>
                                    <div className="padd"></div>
                                    <div className="lineCenter"></div>
                                    <div className="padd"></div>
                                    <div className="lineCenterFun">
                                        <h2>Descubre otra alimentación</h2>
                                    </div>
                                    <div className="padd"></div>
                                    <div className="lineCenter"></div>
                                    <div className="padd"></div>
                                </div>
                                <div className="botcontent2part2">
                                    <div className="content2part2">
                                        <h2 className='web-title'>sin
                                            <span className='typed'></span>
                                        </h2>
                                        <h2>
                                            <div className='text-center'>
                                                Con lo mejor en desayunos
                                            </div>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Zindex2Part2'>
                        <div className="webImageBlockContainer2">
                            <img className='imgpart2' src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
