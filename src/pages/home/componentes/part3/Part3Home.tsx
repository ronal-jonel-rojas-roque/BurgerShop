import React from 'react'
import img from "../../../../assets/images/extras/homeimg/hoja.png"
import "./part3home.css"
export default function Part3Home() {
  return (
    <div>
        <div className="Part3Home">
            <div className="linePart3"></div>
            <div className="imgpart3">
                <img src={img} alt="" />
            </div>
            <div className="linePart3"></div>
        </div>
    </div>
  )
}
