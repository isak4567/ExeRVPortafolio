import { useState } from "react";
import { Trabajo, TrabajoMovil } from "../../components";
import { proyectos } from "../../utils";

function Portafolio({activo}) {
    
    const [actTrabajo, setActTrabajo] = useState(0);

    const HandlerBoton2 = (seccion) => {
        setActTrabajo(seccion);
    }; 

    return (
          
        <div className={`Portafolio ${activo !== 2 && "displayNone"}`}>

            <div className="lista-trabajos">

                <div className={`${actTrabajo === 0 && "active-trab" }`} 
                onClick={() => HandlerBoton2(0)}>
                    <img src={require("../../assets/img/portafolio/HXN.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 4 && "active-trab" }`} 
                onClick={() => HandlerBoton2(4)}>
                    <img src={require("../../assets/img/portafolio/emd.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 8 && "active-trab" }`} 
                onClick={() => HandlerBoton2(8)}>
                    <img src={require("../../assets/img/portafolio/hp2.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 3 && "active-trab" }`} 
                onClick={() => HandlerBoton2(3)}>
                    <img src={require("../../assets/img/portafolio/indem.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 2 && "active-trab" }`} 
                onClick={() => HandlerBoton2(2)}>
                    <img src={require("../../assets/img/portafolio/pro.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 7 && "active-trab" }`} 
                onClick={() => HandlerBoton2(7)}>
                    <img src={require("../../assets/img/portafolio/smarth.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 6 && "active-trab" }`} 
                onClick={() => HandlerBoton2(6)}>
                    <img src={require("../../assets/img/portafolio/Va.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 1 && "active-trab" }`} 
                onClick={() => HandlerBoton2(1)}>
                    <img src={require("../../assets/img/portafolio/ygg.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 9 && "active-trab" }`} 
                onClick={() => HandlerBoton2(9)}>
                    <img src={require("../../assets/img/portafolio/cross.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 5 && "active-trab" }`} 
                onClick={() => HandlerBoton2(5)}>
                    <img src={require("../../assets/img/portafolio/A_la_orden.png")} alt="" />
                </div>

                <div className={`${actTrabajo === 10 && "active-trab" }`} 
                onClick={() => HandlerBoton2(10)}>
                    <img src={require("../../assets/img/portafolio/Apoyo.png")} alt="" />
                </div>             

            </div>

            {proyectos.map((el, index) => <Trabajo info={el} active={actTrabajo} number={index}/>)}

        </div>

    );
}

function PortafolioMovil({activo, actTrabajo}) {

    return (
          
        <div className={`Portafolio ${activo !== 2 && "displayNone"}`}>

            {proyectos.map((el, index) => <TrabajoMovil info={el} active={actTrabajo} number={index}/>)}

        </div>
    );
}

export { Portafolio, PortafolioMovil };