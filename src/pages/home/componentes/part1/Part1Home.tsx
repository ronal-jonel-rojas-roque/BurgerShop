import React, { useEffect, useState } from 'react';
import { data_part1 } from '../../../../data/HomeData';
import "./part1home.css";

export default function Part1Home() {
    const [leftImages, setLeftImages] = useState<string[]>([]);
    const [rigthImages, setRigthImages] = useState<string[]>([]);
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [currentRigthIndex, setCurrentRigthIndex] = useState(0);
    const [fadeLeft, setFadeLeft] = useState<boolean>(false);
    const [fadeRigth, setFadeRigth] = useState<boolean>(false);

    useEffect(() => {
        const left: string[] = [];
        const rigth: string[] = [];
        data_part1.forEach(item => {
            if (item.diferentation === 'left') {
                left.push(item.imgUrl);
            } else if (item.diferentation === 'rigth') {
                rigth.push(item.imgUrl);
            }
        });
        setLeftImages(left);
        setRigthImages(rigth);

        // Alternar imágenes cada 3 segundos
        const leftInterval = setInterval(() => {
            setFadeLeft(true);
            setTimeout(() => {
                setCurrentLeftIndex(prevIndex => (prevIndex + 1) % left.length);
                setFadeLeft(false);
            }, 500);
        }, 3000);

        const rigthInterval = setInterval(() => {
            setFadeRigth(true);
            setTimeout(() => {
                setCurrentRigthIndex(prevIndex => (prevIndex + 1) % rigth.length);
                setFadeRigth(false);
            }, 500);
        }, 3000);


        return () => {
            clearInterval(leftInterval);
            clearInterval(rigthInterval);
        };
    }, []);

    return (
        <div>
            <div className='ContainerPart1Home'>
                <div className="Part1Left">
                    <div className="imgdiv">
                        {leftImages.length > 0 && (
                            <img src={leftImages[currentLeftIndex]} alt="imgLeft" className={fadeLeft ? 'fade-in' : 'fade-out'} />
                        )}
                    </div>
                </div>
                <div className="Part1Rigth">
                    <div className="imgdiv">
                        {rigthImages.length > 0 && (
                            <img src={rigthImages[currentRigthIndex]} alt="imgRigth" className={fadeRigth ? 'fade-in' : 'fade-out'} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}