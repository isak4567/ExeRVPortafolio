import { useState } from "react";
import { FaBookReader, FaAward, FaArrowLeft } from "react-icons/fa";



function Educacion({activo}) {

    const inf = "Crear productos con base en necesidades reales.Investigar al usuario realizando encuestas y entrevistas.Estudiar los productos que tienen el fin de solucionar el mismo problema.Aprender cómo utilizar herramientas de diseño como Rhinos, adobe photoshop illustrator y keyshot.Crear prototipos y realizar pruebas de usabilidad.Trabajar en equipo y colaborar con otros diseñadores y desarrolladores para asegurarte de que los diseñofinales fueran factibles y efectivos".split(".");
  
    
    return (
        <div className={`Educacion ${activo !== 3 && "displayNone"}`}>

            <div className="col col1">
                <div className="edu-titulo">
                    <h2>Lic. en Diseño industrial</h2>
                    <div>
                        <p>Universidad San Pablo T</p>
                        <p className="edu-fecha">Desde: Abril / 2010 Hasta: Nov / 2017</p>
                    </div>
                </div>

                <ul className="h-cont">
                    {inf.map((el) => <li>{el}.</li>)}
                </ul>
            </div>

            <div className="col col2">
                <div className="h-top">
                    <FaBookReader />
                    <p>Cursos</p>
                </div>

                <div className="h-cont">
                    <p>
                        <span>01/23</span>
                        UX Writing - Coder House
                    </p>
                    <p>
                        <span>06/22</span>
                        Advanced UX/UI Design - Coder House
                    </p>
                    <p>
                        <span>12/21</span>
                        UX/UI Design - Coder House
                    </p>
                    <p>
                        <span>05/21</span>
                        (UX) - Fundación Carlos Slim
                    </p>
                    <p>
                        <span>06/18</span>
                        Diseño y comunicación - Buro Coworking
                    </p>
                </div>
            </div>

            <div className="col col3">
                <div className="h-top">
                    <FaAward />
                    <p>Premios</p>
                </div>

                <div className="h-cont">
                    <p>2021 - <span>1º Lugar</span></p>
                    <p>Innovation Award for Inclusion - Ing. Kohanoff</p>
                </div>
            </div>

        </div>
            

    );
}

function EducacionMovil({activo}) {

    const inf = "Crear productos con base en necesidades reales.Investigar al usuario realizando encuestas y entrevistas.Estudiar los productos que tienen el fin de solucionar el mismo problema.Aprender cómo utilizar herramientas de diseño como Rhinos, adobe photoshop illustrator y keyshot.Crear prototipos y realizar pruebas de usabilidad.Trabajar en equipo y colaborar con otros diseñadores y desarrolladores para asegurarte de que los diseñofinales fueran factibles y efectivos".split(".");

    const [habilidadActiva, setHabilidadActiva] = useState(0);

    const HabilidadActivaHandler = (num) => {setHabilidadActiva(num)};
    
    return (
        <div className={`Educacion ${activo !== 3 && "displayNone"}`}>
            <div className="col col1">
                <div className="edu-titulo">
                    <h2>Lic. en Diseño industrial</h2>
                    <div>
                        <p>Universidad San Pablo T</p>
                        <p className="edu-fecha">Desde: Abril / 2010 Hasta: Nov / 2017</p>
                    </div>
                </div>

                <ul className="h-cont">
                    {inf.map((el) => <li>{el}.</li>)}
                </ul>
            </div>

            <div className="habilidades-navMovil">
                <button onClick={()=>{HabilidadActivaHandler(1)}}><FaBookReader /> Cursos</button>
                <button onClick={()=>{HabilidadActivaHandler(2)}}><FaAward /> Premios</button>
            </div>

            <div className={`col col2 ${habilidadActiva !== 1 && "displayNone"}`}>
                <div className="h-top">
                    <FaBookReader />
                    <p>Cursos</p>
                </div>

                <div className="h-cont">
                    <p>
                        <span>01/23</span>
                        UX Writing - Coder House
                    </p>
                    <p>
                        <span>06/22</span>
                        Advanced UX/UI Design - Coder House
                    </p>
                    <p>
                        <span>12/21</span>
                        UX/UI Design - Coder House
                    </p>
                    <p>
                        <span>05/21</span>
                        (UX) - Fundación Carlos Slim
                    </p>
                    <p>
                        <span>06/18</span>
                        Diseño y comunicación - Buro Coworking
                    </p>
                </div>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

            <div className={`col col3 ${habilidadActiva !== 2 && "displayNone"}`}>
                <div className="h-top">
                    <FaAward />
                    <p>Premios</p>
                </div>

                <div className="h-cont">
                    <p>2021 - <span>1º Lugar</span></p>
                    <p>Innovation Award for Inclusion - Ing. Kohanoff</p>
                </div>

                <div className="h-volver" onClick={()=>{HabilidadActivaHandler(0)}}>
                    <FaArrowLeft />
                    <p>Volver</p>
                </div>
            </div>

        </div>
            

    );
}

export { Educacion, EducacionMovil };
