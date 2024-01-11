
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaLinkedinIn, FaBehance, FaEnvelope } from "react-icons/fa";


function Layout({ children }) {

    const [botonActivo, setBotonActivo] = useState(0);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
    };
    
    return (
        <div className="App">

            <nav className="Navegador">

                <div className={`Foto-Perfil ${botonActivo > 0 && "Foto-Perfil-img" }`}></div>

                <div className="Cont-Nav">
                    <NavLink to={`/SobreMi`} 
                    className={`Nav-Botones ${botonActivo === 1 && "activo" }`} 
                    onClick={() => HandlerBoton(1)}>
                        <img src={require("../../assets/img/personal.png")} alt="" />
                        <button>Sobre mi</button>
                    </NavLink>
                    <NavLink to={`/Portafolio`} 
                    className={`Nav-Botones ${botonActivo === 2 && "activo" }`} 
                    onClick={() => HandlerBoton(2)}>
                        <img src={require("../../assets/img/trabajos.png")} alt="" />
                        <button>Portafolio</button>
                    </NavLink>
                    <NavLink to={`/Servicios`} 
                    className={`Nav-Botones ${botonActivo === 3 && "activo" }`} 
                    onClick={() => HandlerBoton(3)}>
                        <img src={require("../../assets/img/servicios.png")} alt="" />
                        <button>Servicios</button>
                    </NavLink>
                    <NavLink to={`/Referencias`} 
                    className={`Nav-Botones ${botonActivo === 4 && "activo" }`} 
                    onClick={() => HandlerBoton(4)}>
                        <img src={require("../../assets/img/referencias.png")} alt="" />
                        <button>Referencias</button>
                    </NavLink>
                </div>

                <div className="Links">
                    <p><FaPhoneAlt/> +54-381-5698632</p>
                    <p><FaLinkedinIn/> exe116robles@gmail.com</p>
                    <p><FaBehance/> Link a Linked in</p>
                    <p><FaEnvelope/> Link a Behance</p>
                </div>

            </nav>

            <div className="Cont-Principal">

                { children }

            </div>
            

        </div>
    );
}

export { Layout };