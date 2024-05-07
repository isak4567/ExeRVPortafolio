import { useState } from "react";
import { FaPhoneAlt, FaLinkedinIn, FaBehance, FaEnvelope, FaBars } from "react-icons/fa";
import { Home, Portafolio, PortafolioMovil, Referencias, Servicios, SobreMi } from '../../pages';

function LayoutPc() {
  
    const [botonActivo, setBotonActivo] = useState(0);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
    };

    return (
        <div className="App">

            <nav className="Navegador">

                <div onClick={() => HandlerBoton(0)} className={`Foto-Perfil ${botonActivo > 0 && "Foto-Perfil-img" }`}></div>
            
                <div className="Cont-Nav">
                    <div 
                    className={`Nav-Botones ${botonActivo === 2 && "activo" }`} 
                    onClick={() => HandlerBoton(2)}>
                        <img src={require(`../../assets/img/trabajos${botonActivo === 2? "2" : ""}.png`)} alt="" />
                        <button>Portafolio</button>
                    </div>
                    <div 
                    className={`Nav-Botones ${botonActivo === 1 && "activo" }`} 
                    onClick={() => HandlerBoton(1)}>
                        <img src={require(`../../assets/img/personal${botonActivo === 1? "2" : ""}.png`)} alt="" />
                        <button>Sobre mi</button>
                    </div>
                    <div 
                    className={`Nav-Botones ${botonActivo === 3 && "activo" }`} 
                    onClick={() => HandlerBoton(3)}>
                        <img src={require(`../../assets/img/servicios${botonActivo === 3? "2" : ""}.png`)} alt="" />
                        <button>Servicios</button>
                    </div>
                    <div 
                    className={`Nav-Botones ${botonActivo === 4 && "activo" }`} 
                    onClick={() => HandlerBoton(4)}>
                        <img src={require(`../../assets/img/referencias${botonActivo === 4? "2" : ""}.png`)} alt="" />
                        <button>Referencias</button>
                    </div>
                </div>
            
                <div className="Links">
                    <p><FaPhoneAlt/> +54-381-5698632</p>
                    <p><FaEnvelope/> exe116robles@gmail.com</p>
                    <p><FaLinkedinIn/> <a href="https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/" target="_blank">Link to Linkedin</a></p>
                    <p><FaBehance/> <a href="https://www.behance.net/exequielroblesvega" target="_blank">Link to Behance</a></p>
                </div>
        
            </nav> 

            <div className="Cont-Principal">

                <Home activo={botonActivo}/>
                <Portafolio activo={botonActivo}/>
                <SobreMi activo={botonActivo} setActivo={setBotonActivo}/>
                <Servicios activo={botonActivo}/>
                <Referencias activo={botonActivo}/>
            </div>

        </div>
    );
}

function LayoutMovil() {   
  
    // ###### Home
    const [botonActivo, setBotonActivo] = useState(0);
    const [nav, setNav] = useState(false);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
        setNav(false);
    };

    // ###### Portafolio
    const [actTrabajo, setActTrabajo] = useState(0);
    const [actNavPort, setActNavPort] = useState(false);

    const HandlerBoton2 = (seccion) => {
        setActTrabajo(seccion);
        setActNavPort(false);
    }; 

    return (
        <div className="App">

            <div className="header-movil">
                <FaBars className={`${nav == true && "activo"}`} onClick={()=>{setNav(!nav)}}/>
            </div>

            <div className="main-movil">
                <nav className={`Navegador ${nav !== true && "navMove"}`}>
                    <div onClick={() => HandlerBoton(0)} className={`Foto-Perfil Foto-Perfil-img`}></div>
                
                    <div className="Cont-Nav">
                        <div 
                        className={`Nav-Botones ${botonActivo === 2 && "activo" }`} 
                        onClick={() => HandlerBoton(2)}>
                            <img src={require(`../../assets/img/trabajos${botonActivo === 2? "2" : ""}.png`)} alt="" />
                            <button>Portafolio</button>
                        </div>
                        <div 
                        className={`Nav-Botones ${botonActivo === 1 && "activo" }`} 
                        onClick={() => HandlerBoton(1)}>
                            <img src={require(`../../assets/img/personal${botonActivo === 1? "2" : ""}.png`)} alt="" />
                            <button>Sobre mi</button>
                        </div>
                        <div 
                        className={`Nav-Botones ${botonActivo === 3 && "activo" }`} 
                        onClick={() => HandlerBoton(3)}>
                            <img src={require(`../../assets/img/servicios${botonActivo === 3? "2" : ""}.png`)} alt="" />
                            <button>Servicios</button>
                        </div>
                        <div 
                        className={`Nav-Botones ${botonActivo === 4 && "activo" }`} 
                        onClick={() => HandlerBoton(4)}>
                            <img src={require(`../../assets/img/referencias${botonActivo === 4? "2" : ""}.png`)} alt="" />
                            <button>Referencias</button>
                        </div>
                    </div>
                </nav> 

                <div className="Cont-Principal">
                    <Home activo={botonActivo}/>
                    <PortafolioMovil activo={botonActivo} actTrabajo={actTrabajo}/>
                    <SobreMi activo={botonActivo} setActivo={setBotonActivo}/>
                    <Servicios activo={botonActivo}/>
                    <Referencias activo={botonActivo}/>
                </div>
            </div>

            <div className={`footer-movil ${botonActivo >= 3 && "displayNone"}`}>
                <div className={`Links ${botonActivo !== 0 && "displayNone"}`}>
                    <p><FaPhoneAlt/> +54-381-5698632</p>
                    <p><FaEnvelope/> exe116robles@gmail.com</p>
                    <p><FaLinkedinIn/> <a href="https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/" target="_blank">Link to Linkedin</a></p>
                    <p><FaBehance/> <a href="https://www.behance.net/exequielroblesvega" target="_blank">Link to Behance</a></p>
                </div>

                <div 
                className={`lista-trabajos 
                ${botonActivo !== 2 && "displayNone"} 
                ${actNavPort && "port-nav"}`}>

                    <div 
                    className={`nav-portafolio ${actNavPort && "nav-portafolio-act"}`} 
                    onClick={()=>{setActNavPort(!actNavPort)}}></div>

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
            </div>

        </div>
    );
}

export { LayoutPc, LayoutMovil };
