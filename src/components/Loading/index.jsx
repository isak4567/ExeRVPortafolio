




function Loading() {

    return (
        <div className={`Loading`}>
            <img className="absolute nube-at1" src={require("../../assets/img/carga/nube_1_1.webp")} alt="" />
            <img className="absolute nube-at2" src={require("../../assets/img/carga/nube_1_2.webp")} alt="" />
            <img className="absolute nube-iz" src={require("../../assets/img/carga/nube_izquierda.webp")} alt="" />
            <img className="absolute nube-d" src={require("../../assets/img/carga/nuve_derecha.webp")} alt="" />
            <img className="absolute nube-ad1" src={require("../../assets/img/carga/nube_suave_adelante.webp")} alt="" />
            <img className="absolute nube-ad2" src={require("../../assets/img/carga/nube_suave_adelante_2.webp")} alt="" />
            <img className="absolute nube-fondo" src={require("../../assets/img/carga/nube_suave_atras.webp")} alt="" />

            <div className="absolute sol"></div>

            <img className="absolute carga-stiker" src={require("../../assets/img/carga/tipito.png")} alt="" />

            <div className="absolute blanco"></div>

        </div>
    );
}

export { Loading };
