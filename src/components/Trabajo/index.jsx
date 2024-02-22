


function Trabajo({active, number, info}) {

    let cond = active !== number && "displayNone";
    
    return (
        <div className={`trabajo ${cond}`}>

            <div className="trabajo-cont">
                <div className="trabajo-img">
                    <img src={info.portada} alt="" />
                </div>

                <div className="info-trabajo">
                    <h2>{info.titulo}</h2>
                    {info.desc.map((el) => <p>{el}</p>)}
                    <button>Ver más</button>
                </div>

            </div>

            <div className="trabajo-detalles">
                <div>
                    <p className="tr-titulo">Rol en este trabajo</p>
                    <p>{info.rol}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tiempo de trabajo</p>
                    <p>{info.tiempo}</p>
                </div>
                <div>
                    <p className="tr-titulo">Equipo</p>
                    <p>{info.team}</p>
                </div>
                <div>
                    <p className="tr-titulo">Tecnologias aplicadas</p>
                    <div>
                        {info.tecnologias.map((el) => <img src={el} />)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export { Trabajo };