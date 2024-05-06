import { useState } from "react";
import { FaPhoneAlt, FaLinkedinIn, FaBehance, FaEnvelope, FaBars } from "react-icons/fa";
import { Home, Portafolio, Referencias, Servicios, SobreMi } from '../../pages';

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
  
    const [botonActivo, setBotonActivo] = useState(0);
    const [nav, setNav] = useState(false);

    const HandlerBoton = (seccion) => {
        setBotonActivo(seccion);
        setNav(false);
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
                    <Portafolio activo={botonActivo}/>
                    <SobreMi activo={botonActivo} setActivo={setBotonActivo}/>
                    <Servicios activo={botonActivo}/>
                    <Referencias activo={botonActivo}/>
                </div>
            </div>

            <div className="footer-movil">
                <div className="Links">
                    <p><FaPhoneAlt/> +54-381-5698632</p>
                    <p><FaEnvelope/> exe116robles@gmail.com</p>
                    <p><FaLinkedinIn/> <a href="https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/" target="_blank">Link to Linkedin</a></p>
                    <p><FaBehance/> <a href="https://www.behance.net/exequielroblesvega" target="_blank">Link to Behance</a></p>
                </div>
            </div>



        </div>
            

    );
}

export { LayoutPc, LayoutMovil };
