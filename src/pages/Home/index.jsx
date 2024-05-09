

function Home({activo}) {


    return (
        <div className={`home ${activo !== 0 && "displayNone"}`}>            
            
            <img className="img-sujeto" src={require("../../assets/img/perfil.webp")} alt="" />

            <div className="sujeto">
                <h1>Exequiel Robles Vega Diseñador UX/UI</h1>
                <h2>Busco elevar las experiencias.</h2>
                <div className="img-sujeto-desc">
                    <img className="titulo1-sujeto" src={require("../../assets/img/Titulo.png")} alt="" />
                    <img className="titulo2-sujeto" src={require("../../assets/img/Titulo2.png")} alt="" />
                </div>

            </div>

        </div>
    );
}

export { Home };