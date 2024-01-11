import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TrExp(params) {
     
    return (
    <div className="experiencia-info">

        <div className="experiencia-top">

            <div>
                <img src="" alt="" />
                <h2>Hecho x Nosotros</h2>
            </div>

            <div>
                <p>UX Researcher</p>
            </div>

            <div>
                <p>Desde: Julio/2023 Hasta: Enero/2024</p>
            </div>

        </div>

        <ul className="experiencia-descr">
            <li>Desarrollar el procedimiento de investigación plasmado en trello.</li>
            <li> Crear encuestas y realizar entrevistas a usuarios para obtener información cualitativa y cuantitativa.</li>
            <li>Planificar una nueva arquitectura de información basada en los resultados obtenidos en la Card-Sorting y Treetesting.</li>
            <li>Realicé pruebas A/B para el sitio web de la empresa, aumentando el puntaje de usabilidad de la versión anterior del sitio en un 78%.</li>
        </ul>

        <div className="expSub-cont">

            <div className="expSub-col">
                <div className="expSub-tittle">
                    <p>Aprendi</p>
                </div>
                <div className="expSub-list">
                    <ul>
                        <li>Desarrollar</li>
                    </ul>
                </div>
            </div>

            <div className="expSub-col">
                <div className="expSub-tittle">
                    <p>Programas</p>
                </div>
                <div className="expSub-list">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="expSub-col">
                <div className="expSub-tittle">
                    <p>Soft Skils</p>
                </div>
                <div className="expSub-list">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
    )
}

function Experiencia() {

    
    
    return (
        <div className="Experiencia">
            <div className="experiencias-nav">
                <button> <FaArrowLeft /> Anterior</button>

                <div className="exp-navCont">
                    <div className="exp-nav">
                        <div className="exp-nav-img">
                            <img src={require("../../assets/img/programasYEst/HXN.png")} alt="" />
                        </div>

                        <div className="exp-nav-esp1"></div>
                        <div className="exp-nav-esp2"></div>
                        <div className="exp-nav-esp3"></div>
                        <div className="exp-nav-esp4"></div>
                        <div className="exp-nav-esp5"></div>
                        <div className="exp-nav-esp6"></div>
                        <div className="exp-nav-esp7"></div>
                        <div className="exp-nav-esp8"></div>
                    </div>  

                    <div className="exp-nav">
                        <div className="exp-nav-img">
                            <img src={require("../../assets/img/programasYEst/Coder.png")} alt="" />
                        </div>

                        <div className="exp-nav-esp1"></div>
                        <div className="exp-nav-esp2"></div>
                        <div className="exp-nav-esp3"></div>
                        <div className="exp-nav-esp4"></div>
                        <div className="exp-nav-esp5"></div>
                        <div className="exp-nav-esp6"></div>
                        <div className="exp-nav-esp7"></div>
                        <div className="exp-nav-esp8"></div>                      
                    </div>

                    <div className="exp-nav">
                        <div className="exp-nav-img">
                            <img src={require("../../assets/img/programasYEst/Vector.png")} alt="" />
                        </div>

                        <div className="exp-nav-esp1"></div>
                        <div className="exp-nav-esp2"></div>
                        <div className="exp-nav-esp3"></div>
                        <div className="exp-nav-esp4"></div>
                        <div className="exp-nav-esp5"></div>
                        <div className="exp-nav-esp6"></div>
                        <div className="exp-nav-esp7"></div>
                        <div className="exp-nav-esp8"></div>                      
                    </div>

                    <div className="exp-nav">
                        <div className="exp-nav-img">
                            <img src={require("../../assets/img/programasYEst/Above.png")} alt="" />
                        </div>

                        <div className="exp-nav-esp1"></div>
                        <div className="exp-nav-esp2"></div>
                        <div className="exp-nav-esp3"></div>
                        <div className="exp-nav-esp4"></div>
                        <div className="exp-nav-esp5"></div>
                        <div className="exp-nav-esp6"></div>
                        <div className="exp-nav-esp7"></div>
                        <div className="exp-nav-esp8"></div>                      
                    </div>

                </div>

                <button>Siguiente <FaArrowRight /></button>
            </div>

            <TrExp />
        </div>
    );
}

export { Experiencia };