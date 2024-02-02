



function Valores({activo}) {
  
    
    return (
        <div className={`Valores ${activo !== 4 && "displayNone"}`}>

            <div className="valores-list">
                <div className="valores-cont">
                    <img src={require("../../assets/img/mini-yo-7.png")} alt="" />

                    <p className="v-tittle">Más preguntas, menos asunciones</p>
                    <p>La investigación adecuada y las preguntas bien formuladas conducen a un producto más completo.</p>
                    <p>Trabajar basándonos en suposiciones puede llevar al equipo a desarrollar soluciones menos óptimas.</p>
                </div>

                <div className="valores-cont">
                    <img src={require("../../assets/img/mini-yo-6.png")} alt="" />

                    <p className="v-tittle">Cumplir objetivos</p>
                    <p>Establecer metas claras proporciona un camino definido en el proceso de planificación.</p>
                    <p>Al considerar el objetivo a cumplir, los procesos a seguir se vuelven más claros, ahorrando tiempo en la planificación y mejorando la comunicación con el equipo.</p>
                </div>

                <div className="valores-cont">
                    <img src={require("../../assets/img/mini-yo-5.png")} alt="" />

                    <p className="v-tittle">Dar espacio a la creatividad</p>
                    <p>La creatividad nos permite ver más allá de lo mundano.</p>
                    <p>Dar un paso hacia atrás nos ayuda a visualizar el espectro completo y comprender necesidades en los usuarios que podrían estar ocultas.</p>
                </div>
            </div>

            <div className="callToAction">
                <p>Si necesitas guia sobre tu proyecto, producto o equipo, no dudes en comunicarte conmigo. Hacer el esfuerzo para que empecemos a hablar ya es un gran comienzo.</p>
                <button>Link a linked in</button>
            </div>

        </div>
            

    );
}

export {  Valores };
