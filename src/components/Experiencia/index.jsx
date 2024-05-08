import { useState } from "react";
import { experiencia } from "../../utils";
import { FaArrowLeft, FaArrowRight, FaBrain, FaKeyboard, FaCrosshairs } from "react-icons/fa";

function TrExp({info, cond, botonActivo}) {
     
    return (
    <div className={`experiencia-info exp-nav ${botonActivo === cond && "experiencia-info-activo" }`}>

        <div className="experiencia-top">

            <div className="exp-titulo">
                <h2>{info.eT1}</h2>
            </div>

            <div className="exp-puesto">
                <p >{info.eT2}</p>
            </div>

            <div className="exp-fecha">
                <p>{info.eT3}</p>
            </div>

        </div>

        <ul className="experiencia-descr">
            {info.eDesc.map((el) => <li>{el}</li>)}
        </ul>

        <div className="expSub-cont">

            <div className="expSub-col expSub-col-1">
                <div className="expSub-tittle">
                    <FaBrain />
                    <p>Aprendi</p>
                </div>
                <div className="expSub-list">
                    <ul>
                        {info.aprendi.map((el) => <li>{el}</li>)}
                    </ul>
                </div>
            </div>

            <div className="expSub-col expSub-col-2">
                <div className="expSub-tittle">
                    <FaKeyboard />
                    <p>Programas</p>
                </div>
                <div className="expSub-list">
                    {info.programas.map((el) =>
                   { return  <img src={el} alt="" />})}
                </div>
            </div>

            <div className="expSub-col expSub-col-3">
                <div className="expSub-tittle">
                    <FaCrosshairs />
                    <p>Soft Skils</p>
                </div>
                <div className="expSub-list">
                    <ul>
                        {info.sSkills.map((el) => <li>{el}</li>)}
                    </ul>
                </div>
            </div>

        </div>

    </div>
    )
}

function TrExpMovil({info, cond, botonActivo}) {
     
    return (
        <div className={` ${botonActivo !== cond && "displayNone" }`}>
            <div className={`experiencia-info exp-nav ${botonActivo === cond && "experiencia-info-activo" }`}>

                <div className="experiencia-top">
                    <div className="exp-titulo">
                        <h2>{info.eT1}</h2>
                    </div>

                    <div className="exp-puesto">
                        <p >{info.eT2}</p>
                    </div>
                </div>

                <div className="exp-fecha">
                        <p>{info.eT3}</p>
                </div>

                <ul className="experiencia-descr">
                    {info.eDesc.map((el) => <li>{el}</li>)}
                </ul>
                    
            </div>

            <div className="expSub-cont">

                <div className="expSub-col expSub-col-2">
                    <div className="expSub-tittle">
                        <FaKeyboard />
                        <p>Programas</p>
                    </div>
                    <div className="expSub-list">
                        {info.programas.map((el) =>
                    { return  <img src={el} alt="" />})}
                    </div>
                </div>

                <div className="expSub-col expSub-col-3">
                    <div className="expSub-tittle">
                        <FaCrosshairs />
                        <p>Soft Skils</p>
                    </div>
                    <div className="expSub-list">
                        <ul>
                            {info.sSkills.map((el) => <li>{el}</li>)}
                        </ul>
                    </div>
                </div>

            </div>            
        </div>
    )
}


function Experiencia({activo}) {


    const [botonActivo, setBotonActivo] = useState(1);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
    };   

    const HandlerArrows = (condition) => {
        if (condition === "-") {
            if (botonActivo === 1) {
                setBotonActivo(4);
            } else setBotonActivo(botonActivo-1);
        } else {
            if (botonActivo === 4) {
                setBotonActivo(1);
            } else setBotonActivo(botonActivo+1);
        }
    };
    
    return (
        <div className={`Experiencia ${activo !== 1 && "displayNone" }`}>
            <div className="experiencias-nav">
                <button onClick={() => HandlerArrows("-")}> <FaArrowLeft /> Anterior</button>

                <div className="exp-navCont">
                    <div 
                    className={`exp-nav ${botonActivo === 1 && "activo" }`} 
                    onClick={() => HandlerBoton(1)}>
                        <img src={require("../../assets/img/programasYEst/HXN.png")} alt="" />
                    </div>  

                    <div 
                    className={`exp-nav ${botonActivo === 2 && "activo" }`} 
                    onClick={() => HandlerBoton(2)}>
                        <img src={require("../../assets/img/programasYEst/Coder.png")} alt="" />                       
                    </div>

                    <div 
                    className={`exp-nav ${botonActivo === 3 && "activo" }`} 
                    onClick={() => HandlerBoton(3)}>
                        <img src={require("../../assets/img/programasYEst/Vector.png")} alt="" />                       
                    </div>

                    <div 
                    className={`exp-nav ${botonActivo === 4 && "activo" }`} 
                    onClick={() => HandlerBoton(4)}>
                        <img src={require("../../assets/img/programasYEst/Above.png")} alt="" />                    
                    </div>

                </div>

                <button onClick={() => HandlerArrows("+")}>Siguiente <FaArrowRight /></button>
            </div>

            <TrExp info={experiencia[0]} cond={1} botonActivo={botonActivo} />
            <TrExp info={experiencia[1]} cond={2} botonActivo={botonActivo} />
            <TrExp info={experiencia[2]} cond={3} botonActivo={botonActivo} />
            <TrExp info={experiencia[3]} cond={4} botonActivo={botonActivo} />
        </div>
    );
}

function ExperienciaMovil({activo}) {

    const [botonActivo, setBotonActivo] = useState(1);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
    };   
    
    return (
        <div className={`Experiencia ${activo !== 1 && "displayNone" }`}>
            <div className="experiencias-nav">

                <div className="exp-navCont">
                    <div 
                    className={`exp-nav ${botonActivo === 1 && "activo movil-border-rigth" }`} 
                    onClick={() => HandlerBoton(1)}>
                        <img src={require("../../assets/img/programasYEst/HXN.png")} alt="" />
                    </div>  

                    <div 
                    className={`exp-nav ${botonActivo === 2 && "activo" }`} 
                    onClick={() => HandlerBoton(2)}>
                        <img src={require("../../assets/img/programasYEst/Coder.png")} alt="" />                       
                    </div>

                    <div 
                    className={`exp-nav ${botonActivo === 3 && "activo" }`} 
                    onClick={() => HandlerBoton(3)}>
                        <img src={require("../../assets/img/programasYEst/Vector.png")} alt="" />                       
                    </div>

                    <div 
                    className={`exp-nav ${botonActivo === 4 && "activo movil-border-left" }`} 
                    onClick={() => HandlerBoton(4)}>
                        <img src={require("../../assets/img/programasYEst/Above.png")} alt="" />                    
                    </div>

                </div>

            </div>

            <TrExpMovil info={experiencia[0]} cond={1} botonActivo={botonActivo} />
            <TrExpMovil info={experiencia[1]} cond={2} botonActivo={botonActivo} />
            <TrExpMovil info={experiencia[2]} cond={3} botonActivo={botonActivo} />
            <TrExpMovil info={experiencia[3]} cond={4} botonActivo={botonActivo} />
        </div>
    );
}

export { Experiencia, ExperienciaMovil };