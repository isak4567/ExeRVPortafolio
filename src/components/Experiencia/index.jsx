import { FaArrowLeft, FaArrowRight, FaBrain, FaKeyboard, FaCrosshairs } from "react-icons/fa";

function TrExp({info}) {
     
    return (
    <div className="experiencia-info">

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

function Experiencia() {

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
            eT1: "Hecho x Nosotros",
            eT2: "UX Researcher",
            eT3: "Desde: Julio/2023 Hasta: Enero/2024",
            eDesc: [
                "",
                "",
                "",
                "",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                "../../assets/img/programasYEst/",
                "../../assets/img/programasYEst/",
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
            eT1: "Hecho x Nosotros",
            eT2: "UX Researcher",
            eT3: "Desde: Julio/2023 Hasta: Enero/2024",
            eDesc: [
                "",
                "",
                "",
                "",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                "../../assets/img/programasYEst/",
                "../../assets/img/programasYEst/",
            ],
            sSkills: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
        },
        {
            eT1: "Hecho x Nosotros",
            eT2: "UX Researcher",
            eT3: "Desde: Julio/2023 Hasta: Enero/2024",
            eDesc: [
                "",
                "",
                "",
                "",
            ],
            aprendi: [
                "Desarrollar",
            ],
            programas: [
                "../../assets/img/programasYEst/",
                "../../assets/img/programasYEst/",
            ],
            sSkills: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
        },
    ]

    
    
    return (
        <div className="Experiencia">
            <div className="experiencias-nav">
                <button> <FaArrowLeft /> Anterior</button>

                <div className="exp-navCont">
                    <div className="exp-nav">
                        <img src={require("../../assets/img/programasYEst/HXN.png")} alt="" />
                    </div>  

                    <div className="exp-nav">
                        <img src={require("../../assets/img/programasYEst/Coder.png")} alt="" />                       
                    </div>

                    <div className="exp-nav">
                        <img src={require("../../assets/img/programasYEst/Vector.png")} alt="" />                       
                    </div>

                    <div className="exp-nav">
                        <img src={require("../../assets/img/programasYEst/Above.png")} alt="" />                    
                    </div>

                </div>

                <button>Siguiente <FaArrowRight /></button>
            </div>

            <TrExp info={info[0]} />
        </div>
    );
}

export { Experiencia };