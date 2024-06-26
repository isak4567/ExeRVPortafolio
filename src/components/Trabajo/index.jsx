
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function Trabajo({active, number, info}) {

    let cond = active !== number && "displayNone";
    
    return (
        <div className={`trabajo ${cond}`}>

            <div className="trabajo-cont">
                <div className="trabajo-img">
                    <img src={info.portada} alt="" />
                    <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                </div>

                <div className="info-trabajo">
                    <h2>{info.titulo}</h2>
                    {info.desc.map((el) => <p>{el}</p>)}
                    {!info.presentacion && <button>Presentacion no disponible</button>}
                    {info.presentacion && <a href={`${info.presentacion}`} target="_blank" rel="noopener noreferrer">Ver presentación</a>}            
                </div>

            </div>

            <div className="trabajo-detalles">
                <div>
                    <p className="tr-titulo">Rol en este trabajo</p>
                    <p>{info.rol}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tiempo de trabajo</p>
                    <p>{info.tiempo}</p>
                </div>
                <div>
                    <p className="tr-titulo">Equipo</p>
                    <p>{info.team}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tecnologias aplicadas</p>
                    <div>
                        {info.tecnologias.map((el) => <img src={el} />)}
                    </div>
                </div>
            </div>

        </div>
    );
}

function TrabajoMovil({active, number, info}) {

    let cond = active !== number && "displayNone";

    const [showDetails, setShowDetails] = useState(false);
    
    return (
        <div className={`trabajo ${cond}`}>

            <div className="trabajo-cont">
                <div className="trabajo-img">
                    <img src={info.portada} alt="" />
                    <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                </div>

                <div className={`info-trabajo ${showDetails && "space-trabajo"}`}>
                    <h2>{info.titulo}</h2>
                    {info.desc.map((el) => <p>{el}</p>)}
                    <button className={`trabajo-detalles-movil ${showDetails && "displayNone"}`} onClick={()=>{setShowDetails(true)}}>Ver detalles</button>
                    {!info.presentacion && <button>Presentacion no disponible</button>}
                    {info.presentacion && <a href={`${info.presentacion}`} target="_blank" rel="noopener noreferrer">Ver presentación</a>}  
                </div>

            </div>  

            <div className={`trabajo-detalles ${!showDetails && "displayNone"}`}>
                <div>
                    <p className="tr-titulo">Rol en este trabajo</p>
                    <p>{info.rol}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tiempo de trabajo</p>
                    <p>{info.tiempo}</p>
                </div>
                <div>
                    <p className="tr-titulo">Equipo</p>
                    <p>{info.team}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tecnologias aplicadas</p>
                    <div>
                        {info.tecnologias.map((el) => <img src={el} />)}
                    </div>
                </div>

                <div className="trabajo-detalles-volver" onClick={()=>{setShowDetails(false)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>

            </div>

        </div>
    );
}

export { Trabajo, TrabajoMovil };