
import { useState } from "react";
import { Experiencia, ExperienciaMovil, Habilidad, HabilidadMovil, Educacion, EducacionMovil, Valores } from "../../components";
import { FaChalkboardTeacher, FaStar, FaBook, FaBookmark } from "react-icons/fa";

function SobreMi({activo, setActivo}) {

    const [botonActivo2, setBotonActivo2] = useState(1);

    const HandlerBoton2 = (seccion) => {
        setBotonActivo2(seccion);
    };   
    
    return (             
        <div className={`SobreMi ${activo !== 1 && "displayNone"}`}>
            
            <div className="SobreMi-nav">

                <div className={`${botonActivo2 === 1 && "activo2" }`} 
                onClick={() => HandlerBoton2(1)}>
                    <FaChalkboardTeacher />
                    <p>Experiencia</p>
                </div>
                <div className={`${botonActivo2 === 2 && "activo2" }`} 
                onClick={() => HandlerBoton2(2)}>
                    <FaStar />
                    <p>Habilidades</p>
                </div>
                <div className={`${botonActivo2 === 3 && "activo2" }`} 
                onClick={() => HandlerBoton2(3)}>
                    <FaBook />
                    <p>Educación</p>
                </div>
                <div className={`${botonActivo2 === 4 && "activo2" }`} 
                onClick={() => HandlerBoton2(4)}>
                    <FaBookmark />
                    <p>Valores</p>
                </div>

            </div>

            <div className="SobreMi-Seccion">
                <Experiencia activo={botonActivo2}/>
                <Habilidad activo={botonActivo2} />
                <Educacion activo={botonActivo2} />
                <Valores activo={botonActivo2} setActivo={setActivo} />
            </div>

        </div>
    );
}

function SobreMiMovil({activo, setActivo, seccionMi}) {

    
    return (             
        <div className={`SobreMi ${activo !== 1 && "displayNone"}`}>

            <div className="SobreMi-Seccion">
                <ExperienciaMovil activo={seccionMi}/>
                <HabilidadMovil activo={seccionMi} />
                <EducacionMovil activo={seccionMi} />
                <Valores activo={seccionMi} setActivo={setActivo} />
            </div>

        </div>
    );
}

export { SobreMi, SobreMiMovil };