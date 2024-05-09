


function Servicios({activo}) {

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
        <div className={`servicios ${activo !== 3 && "displayNone"}`}>
            <div className="servicios-list">
                <div className="servicio-cont">
                    <img src={require("../../assets/img/mini-yo-3.png")} alt="" />

                    <div className="servicio-cont-desc">
                        <p>UX Research</p>

                        <ul>
                            {inf2[0].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>

                </div>

                <div className="servicio-cont">
                    <img src={require("../../assets/img/mini-yo-4.png")} alt="" />

                    <div className="servicio-cont-desc">
                        <p>Diseñar Interfaz (UI)</p>

                        <ul>
                            {inf2[1].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>
                </div>

                <div className="servicio-cont">
                    <img src={require("../../assets/img/mini-yo-2.png")} alt="" />

                    <div className="servicio-cont-desc">
                        <p>Liderar un proyecto</p>

                        <ul>
                            {inf2[2].map((el) => <li>{el}.</li>)}
                        </ul>
                    </div>
                </div>

                <div className="servicio-cont">
                    <img src={require("../../assets/img/mini-yo-1.png")} alt="" />

                    <div className="servicio-cont-desc">
                        <p>Mentorear Personal UX</p>

                        <ul>
                            {inf2[3].map((el) => <li>{el}.</li>)}
                        </ul>

                        <p className="s-m"><span>Servicio no renumerado</span> me apasiona el UX y la gente que comparte dicha pasión.</p>
                    </div>
                </div>
            </div>

            <div className="callToAction">
                <p>Si necesitas guia sobre tu proyecto, producto o equipo, no dudes en comunicarte conmigo. Hacer el esfuerzo para que empecemos a hablar ya es un gran comienzo.</p>
                <a href="https://www.linkedin.com/in/exequiel-robles-vega-b9432b211/" target="_blank">Link a linked in</a>
            </div>
        </div>
    );
}

export { Servicios };