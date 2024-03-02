import { useState } from "react";
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

function Experiencia({activo}) {

    const info = [
        {
            eT1: "Hecho x Nosotros",
            eT2: "UX Researcher",
            eT3: "Desde: Julio/2023 Hasta: Enero/2024",
            eDesc: [
                "Desarrollar el procedimiento de investigación plasmado en trello.",
                "Crear encuestas y realizar entrevistas a usuarios para obtener información cualitativa y cuantitativa.",
                "Planificar una nueva arquitectura de información basada en los resultados obtenidos en la Card-Sorting y Treetesting.",
                "Realicé pruebas A/B para el sitio web de la empresa, aumentando el puntaje de usabilidad de la versión anterior del sitio en un 78%.",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
            ],
            sSkills: [
                "Trabajo en equipo.",
                "Capacidad de análisis.",
                "Resolución de problemas.",
                "Liderazgo.",
                "Comunicación efectiva.",
                "Design Thinking.",
                "Empatizar con el usuario.",
                "Google Analitics.",
                "English.",
            ],
        },
        {
            eT1: "Coder House",
            eT2: "Tutor UX/UI",
            eT3: "Desde: Diciembre/2023 Hasta: *Presente*",
            eDesc: [
                "Lidere al equipo de UX/UI para completar con éxito múltiples proyectos, cada uno en el plazo de 1 mes, cada equipo connformado entre 12 a 20 personas.",
                "Definí las metas en el equipo UX y establecí el MVP para comenzar el proyecto en par al equipo de programación.",
                "Planifiqué la ruta de investigación UX/UI y definí los trabajos a realizar de acorde a las habilidades del equipo.",
                "Diseñe wireframes en baja, capaz de poner a prueba para tener obtener resultados.",
                "Diseñe la presentación del producto para el stakeholder para mostrar los resultados positivos.",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                require("../../assets/img/programasYEst/figma.png"),
            ],
            sSkills: [
                "Trabajo en equipo.",
                "Capacidad de análisis.",
                "Resolución de problemas.",
                "Comunicación efectiva.",
                "Aprender nuevas habilidades.",
                "Capacidad para enseñar.",
                "Empatizar con el usuario.",
            ],
        },
        {
            eT1: "No Country",
            eT2: "Diseñador UX/UI - Team Leader",
            eT3: "Desde: Oct/2022 Hasta: Abril/2023",
            eDesc: [
                "Lidere al equipo de UX/UI para completar con éxito múltiples proyectos, cada uno en el plazo de 1 mes, cada equipo connformado entre 12 a 20 personas.",
                "Definí las metas en el equipo UX y establecí el MVP para comenzar el proyecto en par al equipo de programación.",
                "Definí las metas en el equipo UX y establecí el MVP para comenzar el proyecto en par al equipo de programación.",
                "Diseñe wireframes en baja, capaz de poner a prueba para tener obtener resultados.",
                "Diseñe la presentación del producto para el stakeholder para mostrar los resultados positivos.",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            sSkills: [
                "Trabajo en equipo.",
                "Capacidad de análisis.",
                "Resolución de problemas.",
                "Metodologia Scrum.",
                "Liderazgo.",
                "Comunicación efectiva.",
                "Aprender nuevas habilidades.",
                "Capacidad para enseñar.",
                "Design Thinking.",
                "Empatizar con el usuario.",
            ],
        },
        {
            eT1: "ABOVE (marca freelance)",
            eT2: "Diseñador UX/UI",
            eT3: "Desde: Abril/2022 Hasta: *Presente*",
            eDesc: [
                "Planear Proceso de UXreserch con el fin de crear hipótesis que lograrán un producto innovador y competente.",
                "Realización de user testing para recopilar painpoint y evaluar la arquitectura de la información.",
                "Basándonos en los resultados del estudio, crear hipótesis e implementar cambios en el diseño, considerando las necesidades del stakeholder.",
                "Diseñar pantallas responsive de alta fidelidad.",
                "Creación de guías de estilo graficá, para mantener una marca consistente en todos los productos.",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/adobe-lightroom.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
                require("../../assets/img/programasYEst/rhinos.png"),
                require("../../assets/img/programasYEst/scope.png"),
                require("../../assets/img/programasYEst/unreal.png"),
            ],
            sSkills: [
                "Trabajo en equipo.",
                "Capacidad de análisis.",
                "Resolución de problemas.",
                "Metodologia Scrum.",
                "Liderazgo.",
                "Comunicación efectiva.",
                "Aprender nuevas habilidades.",
                "Pruebas de usabilidad.",
                "Design Thinking.",
                "Empatizar con el usuario.",
            ],
        },
    ]

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

            <TrExp info={info[0]} cond={1} botonActivo={botonActivo} />
            <TrExp info={info[1]} cond={2} botonActivo={botonActivo} />
            <TrExp info={info[2]} cond={3} botonActivo={botonActivo} />
            <TrExp info={info[3]} cond={4} botonActivo={botonActivo} />
        </div>
    );
}

export { Experiencia };