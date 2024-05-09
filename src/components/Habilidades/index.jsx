import { useState } from "react";
import { FaBuffer, FaKeyboard, FaCrosshairs, FaBullhorn, FaArrowLeft } from "react-icons/fa";



function Habilidad({activo}) {

    const inf = "Trabajo en equipo.Capacidad de análisis.Resolución de problemas.Metodologia Scrum.Liderazgo.Comunicación efectiva.Aprender nuevas habilidades.Pruebas de usabilidad.Capacidad para enseñar.Design Thinking.Empatizar con el usuario.Google Analitics".split(".");
  
    
    return (
        <div className={`Habilidades ${activo !== 2 && "displayNone"}`}>

            <div className="col col1">
                <div className="h-top">
                    <FaKeyboard />
                    <p>Programas</p>
                </div>

                <div className="h-cont">
                    <img src={require("../../assets/img/programasYEst/figma.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/adobe-photoshop.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/ilustrador-adobe.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/adobe-lightroom.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/premier-pro.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/corelDraw.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/rhinos.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/scope.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/unreal.png")} alt="" />
                </div>
            </div>

            <div className="col col2">
                <div className="h-top">
                    <FaBuffer />
                    <p>Plataformas</p>
                </div>

                <div className="h-cont">
                    <img src={require("../../assets/img/programasYEst/miro.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/whimsical.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/trello.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/maze.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/figjam.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/opticalWorshop.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/uxMetrics.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/googleAnalitics.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/jira.png")} alt="" />
                </div>
            </div>

            <div className="col col3">
                <div className="h-top">
                    <FaCrosshairs />
                    <p>Soft Skils</p>
                </div>

                <ul className="h-cont">
                    {inf.map((el) => <li>{el}.</li>)}
                </ul>
            </div>

            <div className="col col4">
                <div className="h-top">
                    <FaBullhorn />
                    <p>Lenguajes</p>
                </div>

                <div className="h-cont">
                    <p>Español - Nativo</p>
                    <p>Ingles - C1 Avanzado</p>
                </div>
            </div>

        </div>
            

    );
}

function HabilidadMovil({activo}) {

    const inf = "Trabajo en equipo.Capacidad de análisis.Resolución de problemas.Metodologia Scrum.Liderazgo.Comunicación efectiva.Aprender nuevas habilidades.Pruebas de usabilidad.Capacidad para enseñar.Design Thinking.Empatizar con el usuario.Google Analitics".split(".");
    const [habilidadActiva, setHabilidadActiva] = useState(0);

    const HabilidadActivaHandler = (num) => {setHabilidadActiva(num)};
    
    return (
        <div className={`Habilidades ${activo !== 2 && "displayNone"}`}>

            <div className="habilidades-navMovil">
                <button onClick={()=>{HabilidadActivaHandler(1)}}><FaKeyboard /> Programas</button>
                <button onClick={()=>{HabilidadActivaHandler(2)}}><FaBuffer /> Plataformas</button>
                <button onClick={()=>{HabilidadActivaHandler(3)}}><FaCrosshairs /> Soft Skils</button>
                <button onClick={()=>{HabilidadActivaHandler(4)}}><FaBullhorn /> Lenguajes</button>
            </div>

            <div className={`col ${habilidadActiva !== 1 && "displayNone"}`}>
                <div className="h-top">
                    <FaKeyboard />
                    <p>Programas</p>
                </div>

                <div className="h-cont">
                    <img src={require("../../assets/img/programasYEst/figma.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/adobe-photoshop.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/ilustrador-adobe.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/adobe-lightroom.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/premier-pro.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/corelDraw.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/rhinos.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/scope.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/unreal.png")} alt="" />
                </div>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

            <div className={`col ${habilidadActiva !== 2 && "displayNone"}`}>
                <div className="h-top">
                    <FaBuffer />
                    <p>Plataformas</p>
                </div>

                <div className="h-cont">
                    <img src={require("../../assets/img/programasYEst/miro.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/whimsical.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/trello.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/maze.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/figjam.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/opticalWorshop.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/uxMetrics.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/googleAnalitics.png")} alt="" />
                    <img src={require("../../assets/img/programasYEst/jira.png")} alt="" />
                </div>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

            <div className={`col ${habilidadActiva !== 3 && "displayNone"}`}>
                <div className="h-top">
                    <FaCrosshairs />
                    <p>Soft Skils</p>
                </div>

                <ul className="h-cont">
                    {inf.map((el) => <li>{el}.</li>)}
                </ul>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

            <div className={`col ${habilidadActiva !== 4 && "displayNone"}`}>
                <div className="h-top">
                    <FaBullhorn />
                    <p>Lenguajes</p>
                </div>

                <div className="h-cont">
                    <p>Español - Nativo</p>
                    <p>Ingles - C1 Avanzado</p>
                </div>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

        </div>
            

    );
}

export { Habilidad, HabilidadMovil };
