import { useState } from "react";
import { Layout, Trabajo } from "../../components";

function Portafolio(props) {

    const inf3 = [
        {
            titulo: "Hecho x Nosotros",
            desc: [
                `ONG destinada en ayudar a los pueblos artesanos consumiendo sus productos, ayudando simultaneamente a la protección del medio ambiente generando consiencia en productos de indumentaria nocivos.`,
                 `Nuestros objetivos fueron poder crear más visualización y conseguir donantes para la causa.`
                ],
            rol: "UX Researcher",
            tiempo: "6 meses",
            team: "3 UX/UI - 1 UX Research",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/HxN-B.png"),
        },
        {
            titulo: "YGG",
            desc: ["Red social para el metarso. YGGdrassil planea ser una plataforma que puede ser usada en cualquier dispositivo, considerando los de realidad aumentada y realildad virtual. Busca conectar todos los mundos por medio de esta plataforma, manteniendo conectada a las personas sin importar la realidad en la que este.", "Nuestros objetivos fueron: comprender las necesidades futuras del usuario bajo estas condiciones y proponer funciones tanto innovadoras como eficientes."],
            rol: "Diseñador UX/UI",
            tiempo: "4 meses",
            team: "2 UX/UI (Proyecto Propio)",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
            ],
            portada: require("../../assets/img/portafolio/YGG-B.png"),
        },
        {
            titulo: "PRO-grama",
            desc: ["PRograma es una plataforma de estudio para programadores que busca simplificar el metodo de aprendisaje dando la oportunidad de practicar los codigos durante las practicas.", "Nuestros objetivos fueron: mejorar la retención de los usuarios para terminar los cursos.Por arriba del 50%,, considerando que ese es el porcentaje de retención de alumnos entre las competencias más conocidas."],
            rol: "Diseñador UX/UI",
            tiempo: "2 meses",
            team: "10 back - 6 front - 1 Qa tester - 2 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/adobe-lightroom.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/PRO-B.png"),
        },
        {
            titulo: "INDEMNIZAR",
            desc: [" Consultoria Jurídica, especializada en la gestión eficaz de indemnizaciones por cualquier tipo de daño. Busca informar a los usuarios de sus derechos y mostrar una manera facil de solucionar sus problemas.", "Nuestros objetivos fueron: simplificar el proceso en el cual se pide una consulta juridica, aumentando el nivel de solicitudes en un 68%."],
            rol: "Diseñador UX/UI",
            tiempo: "4 meses",
            team: "1 full stack - 1 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/adobe-lightroom.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/INDEMNIZAR-B.png"),
        },
        {
            titulo: "EMD",
            desc: ["Agencia y academia de modelos, lider en el norte de argentina. More Talent, more impact: esta agencia busca promover todos los talentos artisticos sin importar la forma del cuerpo, resaltando la actitud en las personas.", "Nuestros objetivos fueron: empatizar con el modelo, logrando entender sus miedos y animarlos a una nueva aventura."],
            rol: "Diseñador UX/UI",
            tiempo: "4 meses",
            team: "3 back - 1 front - 1 Qa tester - 1 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/adobe-lightroom.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/EMD-B.png"),
        },
        {
            titulo: "A la orden",
            desc: ["Por el momento no estará disponible proveer información de esta plataforma, hasta que salga al mercado."],
            rol: "Diseñador UX/UI",
            tiempo: "2 meses",
            team: "3 back - 2 front - 1 Qa tester - 1 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst/ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/ALA-B.png"),
        },
        {
            titulo: "Smarth Money School",
            desc: ["Escuela online en el rubro de las criptomonedas.", "Nuestros objetivos fueron: lograr el interes de los usuarios, consiguiendo mayor retención de los mismos, asegurandonos que 30% participen en las charlas gratuitas de la escuela."],
            rol: "Diseñador UX/UI",
            tiempo: "2 meses",
            team: "2 back - 2 front - 1 Qa tester - 2 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
            ],
            portada: require("../../assets/img/portafolio/SMS-B.png"),
        },
        {
            titulo: "VALEN - A place for fashion",
            desc: ["E-Commers dedicada a vender los productos de los diseñadores de moda artesanales. Lugar donde estudiantes de diseño de moda o recien recibidos, pueden subir sus proyectos a modo de portafolio y poder comercializarlos a pedido.", "Nuestros objetivos fueron: aumentar las ventas de los usuarios brindando una plataforma para exibir sus productos delante de un publico interesado en una indumentaria unica."],
            rol: "Diseñador UX/UI",
            tiempo: "3 meses",
            team: "8 back - 6 front - 1 Qa tester - 2 UX/UI",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/premier-pro.png"),
            ],
            portada: require("../../assets/img/portafolio/VALEN-B.png"),
        },
        {
            titulo: "Hecho para 2",
            desc: ["Hecho para 2 busca evitar los desperdicios de comida, garantizando la comunicación entre vecinos, ofreciendo un plato casero a aquellos que viven solos. Garantizando que no queden sobras y rentabilizar un poco los gastos alimenticios de la casa.", "Nuestros objetivos fueron: lograr que los usuarios adopten la APP de manera tal que se reduzca el desperdicio de alimentos en un 70%."],
            rol: "UX Writer",
            tiempo: "3 meses",
            team: "1 UX Writer (Proyecto Propio)",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
            ],
            portada: require("../../assets/img/portafolio/HP2-B.png"),
        },
        {
            titulo: "Crossfy",
            desc: ["Aplicación diseñada para ayudar a los box de crossfit a dar un mejor servicio para sus usuarios, dejando que estos hagan un seguimiento de sus progresos y dando la posibilidad de anotarse a las clases.", "Nuestros objetivos fueron: cambiar la Arquitectura de la Información, mejorando la interacción con los usuarios, y modificar la interacción con los usuarios por una más motivadora y amigable, para que los usuarios se sientan interesados en anotar sus progresos, aumentando las interacciónes con la aplicación."],
            rol: "Diseñador UX/UI",
            tiempo: "3 meses",
            team: "1 UX/UI (Proyecto Propio)",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst//ilustrador-adobe.png"),
                require("../../assets/img/programasYEst/adobe-lightroom.png"),

            ],
            portada: require("../../assets/img/portafolio/Crossfy-B.png"),
        },
        {
            titulo: "Apoyo",
            desc: ["Aplicacion movil para contratar servicio de limpieza a tu hogar o comercio. Esta aplicación busca dár la oportunidad de que gente trabajadora tenga mayor acceso a trabajos, manteniendo su agenda organizada.", "Nuestros objetivos fueron: Garantizar una comunicación fluida centrada en lo importante a la hora de contratar personal de limpieza, acompañando con funciones que ayuden a tener las agendas optimizadas y garantizando transparencia."],
            rol: "Diseñador UX/UI",
            tiempo: "3 meses",
            team: "1 UX/UI (Proyecto Propio)",
            tecnologias: [
                require("../../assets/img/programasYEst/figma.png"),
                require("../../assets/img/programasYEst/adobe-photoshop.png"),
                require("../../assets/img/programasYEst//ilustrador-adobe.png"),
            ],
            portada: require("../../assets/img/portafolio/APOYO-B.png"),
        },
    ]
    
    const [actTrabajo, setActTrabajo] = useState(0);

    const HandlerBoton2 = (seccion) => {
        setActTrabajo(seccion);
    }; 

    return (
        <Layout>            
            
            <div className="Portafolio">

                <div className="lista-trabajos">

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

                {inf3.map((el, index) => <Trabajo info={el} active={actTrabajo} number={index}/>)}

            </div>

        </Layout>
    );
}

export { Portafolio };