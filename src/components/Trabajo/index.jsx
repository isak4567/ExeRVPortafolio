


function Trabajo({active, OnClick, number, backmove, OnClick2}) {

    let cond = active === number? "viendo-trabajo" : active === (number - 1) && number !== 0? "trabajo-left" : "";
    
    return (
        <div 
        className={`trabajo ${cond}`}
        onClick={() => {
            OnClick(number);
            OnClick2(backmove);
        }}
        >

            <div className="trabajo-cont">
                <div className="trabajo-cont-img"></div>

                <div className="trabajo-detalles">
                    <div>
                        <p>Rol en este trabajo</p>
                    </div>
                    <div>
                        <p>tiempo de trabajo</p>
                    </div>
                    <div>
                        <p>metodologia</p>
                    </div>
                    <div>
                        <p>tecnologias aplicadas</p>
                    </div>
                </div>

            </div>

            <div className="info-trabajo">
                <h2>titulo del trabajo</h2>
                <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <button>Ver más</button>
            </div>

        </div>
    );
}

export { Trabajo };