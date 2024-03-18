import { useState, useEffect } from "react";
import { FaPhoneAlt, FaLinkedinIn, FaBehance, FaEnvelope } from "react-icons/fa";
import { Home, Portafolio, Referencias, Servicios, SobreMi } from '../pages';
import { Loading } from "../components";
import './style.css';

function App() {

  const [botonActivo, setBotonActivo] = useState(0);
  const [loading, setLoading] = useState("false");

  const HandlerBoton = (seccion) => {
    setBotonActivo(seccion);
  };


  useEffect(() => {
    setLoading("false");
    const loadingTime = () => {
        setTimeout(()=> setLoading("true"), 6000);
    };

    if (sessionStorage.getItem("loading") === "true") {
        setLoading("true");
    } else {
        loadingTime();
        sessionStorage.setItem("loading","true");
    }
  },[]);
  
  return (

      <div className="Main">     
        { loading === "false" && <Loading />}
        { loading === "true" && (
        <div className="App">

            <nav className="Navegador">

            <div className={`Foto-Perfil ${botonActivo > 0 && "Foto-Perfil-img" }`}></div>
        
            <div className="Cont-Nav">
                <div 
                className={`Nav-Botones ${botonActivo === 2 && "activo" }`} 
                onClick={() => HandlerBoton(2)}>
                    <img src={require(`../assets/img/trabajos${botonActivo === 2? "2" : ""}.png`)} alt="" />
                    <button>Portafolio</button>
                </div>
                <div 
                className={`Nav-Botones ${botonActivo === 1 && "activo" }`} 
                onClick={() => HandlerBoton(1)}>
                    <img src={require(`../assets/img/personal${botonActivo === 1? "2" : ""}.png`)} alt="" />
                    <button>Sobre mi</button>
                </div>
                <div 
                className={`Nav-Botones ${botonActivo === 3 && "activo" }`} 
                onClick={() => HandlerBoton(3)}>
                    <img src={require(`../assets/img/servicios${botonActivo === 3? "2" : ""}.png`)} alt="" />
                    <button>Servicios</button>
                </div>
                <div 
                className={`Nav-Botones ${botonActivo === 4 && "activo" }`} 
                onClick={() => HandlerBoton(4)}>
                    <img src={require(`../assets/img/referencias${botonActivo === 4? "2" : ""}.png`)} alt="" />
                    <button>Referencias</button>
                </div>
            </div>
        
            <div className="Links">
                <p><FaPhoneAlt/> +54-381-5698632</p>
                <p><FaLinkedinIn/> exe116robles@gmail.com</p>
                <p><FaBehance/> Link a Linked in</p>
                <p><FaEnvelope/> Link a Behance</p>
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
        )}
      </div>
  );
}

export default App;
