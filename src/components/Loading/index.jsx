




function Loading() {

    return (
        <div className={`Loading`}>
            <img className="absolute nube-at1" src={require("../../assets/img/carga/nube_1_1.png")} alt="" />
            <img className="absolute nube-at2" src={require("../../assets/img/carga/nube_1_2.png")} alt="" />
            <img className="absolute nube-iz" src={require("../../assets/img/carga/nube_izquierda.png")} alt="" />
            <img className="absolute nube-d" src={require("../../assets/img/carga/nuve_derecha.png")} alt="" />
            <img className="absolute nube-ad1" src={require("../../assets/img/carga/nube_suave_adelante.png")} alt="" />
            <img className="absolute nube-ad2" src={require("../../assets/img/carga/nube_suave_adelante_2.png")} alt="" />
            <img className="absolute nube-fondo" src={require("../../assets/img/carga/nube_suave_atras.png")} alt="" />

            <div className="absolute sol"></div>

            <img className="absolute carga-stiker" src={require("../../assets/img/carga/tipito.png")} alt="" />

            <div className="absolute blanco"></div>

        </div>
    );
}

export { Loading };
