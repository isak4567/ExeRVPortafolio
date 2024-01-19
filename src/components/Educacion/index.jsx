
import { FaBookReader, FaAward } from "react-icons/fa";



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
                        <spas>06/22</spas>
                        Advanced UX/UI Design - Coder House
                    </p>
                    <p>
                        <spas>12/21</spas>
                        UX/UI Design - Coder House
                    </p>
                    <p>
                        <spas>05/21</spas>
                        (UX) - Fundación Carlos Slim
                    </p>
                    <p>
                        <spas>06/18</spas>
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
                    <p>2021 - 1º Lugar</p>
                    <p>Innovation Award for Inclusion - Ing. Kohanoff</p>
                </div>
            </div>

        </div>
            

    );
}

export { Educacion };
