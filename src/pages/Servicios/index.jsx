
import { Layout } from "../../components";


function Servicios(props) {

    const inf2 = [
        `Planificar investigación.
        Recopilar datos.
        Analizar datos.
        Generar informes.
        Crear propuesta de valor.
        Testear resultados`.split("."),
        `Crear wireframe en baja.
        Definir Design system.
        Diseñar componentes atomicos.
        Crear prototipos.
        Dar adaptabilidad.
        Diseñar mock up y presentaciones.
        Animar el prototipo`.split("."),
        `Planificar proyectos.
        Definir objetivos.
        Supervisión y coordinación.
        Comunicación deciciones y procesos a Stakeholders.
        Seguimiento el proyecto.
        Coordinar cierre del proyecto`.split("."),
        `Ayudar en el desarrollo de habilidades.
        Supervisar proyectos.
        Alentar el aprendizaje continuo.
        Ayudar a abordar desafios.
        Establecer metas`.split("."),
    ]
    
    return (
        <Layout>  

            <div className="servicios">
                <div className="servicios-list">
                    <div className="servicio-cont">
                        <img src={require("../../assets/img/mini-yo-4.png")} alt="" />

                        <p>UX Research</p>

                        <ul>
                            {inf2[0].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>

                    <div className="servicio-cont">
                        <img src={require("../../assets/img/mini-yo-3.png")} alt="" />

                        <p>Diseñar Interfaz (UI)</p>

                        <ul>
                            {inf2[1].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>

                    <div className="servicio-cont">
                        <img src={require("../../assets/img/mini-yo-2.png")} alt="" />

                        <p>Liderar un proyecto</p>

                        <ul>
                            {inf2[2].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>

                    <div className="servicio-cont">
                        <img src={require("../../assets/img/mini-yo-1.png")} alt="" />

                        <p>Mentorear Personal UX</p>

                        <ul>
                            {inf2[3].map((el) => <li>{el}.</li>)}
                        </ul>

                        <p className="s-m"><span>Servicio no renumerado</span> me apasiona el UX y la gente que comparte dicha pasión.</p>
                    </div>
                </div>

                <div className="callToAction">
                    <p>Si necesitas guia sobre tu proyecto, producto o equipo, no dudes en comunicarte conmigo. Hacer el esfuerzo para que empecemos a hablar ya es un gran comienzo.</p>
                    <button>Link a linked in</button>
                </div>
            </div>

        </Layout>
    );
}

export { Servicios };