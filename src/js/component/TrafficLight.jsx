import React, { useState } from "react";

export const TrafficLight = () => {
    const [background, setBackground] = useState('rojo');

    return(
        <div className="card container">
            <div className="luces">
                <div className={`rojo ${background == "rojo" ? "active" : ""}`} onClick={() => setBackground("rojo")}></div>
                <div className={`amarillo ${background == "amarillo" ? "active" : ""}`} onClick={() => setBackground("amarillo")}></div>
                <div className={`verde ${background == "verde" ? "active" : ""}`} onClick={() => setBackground("verde")}></div>
            </div>

        </div>
    )

}

