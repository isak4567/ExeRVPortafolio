import { useState } from "react";

function Referencias({activo}) {
    const info4 = [
        {
            foto: "augusto",
            comentario: "Muy responsable, atento y cumplió con la tarea encomendada en tiempo y forma. Pudo ver muy rápido que es lo que estaba buscando y supo como plasmarlo en el diseño."
        },
        {
            foto: "alpaca",
            comentario: "Siempre me resultó agradable la experiencia de trabajar juntos. Es sencillo trabajar en equipo con vos, tenés un buen manejo del tiempo aunque se te pida que realices algo en un plazo corto, siempre intentas enriquecer las ideas propuestas, ante problemas sabes reaccionar de una manera calmada y resolutiva, y en general ayudas a que la carga de trabajo siempre se vea bien dividida. Experiencia 10/10."
        },
        {
            foto: "charly",
            comentario: "De los pocos profesionales apasionados y comprometidos con sus clientes que puedo recomendar. Rapidez, transparencia y experticia son sus cualidades más sobresalientes."
        },
        {
            foto: "neme",
            comentario: "¡Un diseñador que no solo crea interfaces, sino experiencias memorables! Trabajar con Exequiel ha sido una experiencia excepcional. Demuestra un amor genuino por los detalles y una pasión por la autogestión."
        },
        {
            foto: "samir",
            comentario: "Exequiel me resultó un profesional super dedicado y comprometido con mi proyecto. No solo es técnico con sus conocimientos sino que también supo ser siempre claro para yo comprenda todo. Sin dudas no puedo dejar de recalcar que la estética y la facilidad de funcionamiento de su trabajo son los puntos más destacados. Lo recomiendo para todo aquel que quiera emprender en el ecomerce."
        },
        {
            foto: "denu",
            comentario: "Trabajar con Exequiel es muy ameno, llevo las propuestas de acciones de la empresa cada semana y el siempre encuentra una vuelta de rosca para hacer mejor la vinculación con la comunidad. Es creativo y activo, una combinación que ha favorecido a las entregas de mis trabajos."
        },
    ]

    const [botonActivo, setBotonActivo] = useState(0);
    const [referencia, setReferencia] = useState(info4[0].comentario);
    const [move, setMove] = useState(0);

    const divStyle = {
        transform: `translateX(-${move}%)`
    };

    const HandlerBoton3 = (num, text) => {
        setBotonActivo(num);
        setReferencia(text);
        setMove(num*16.9);
    };
    
    return (
           
        <div className={`referecias ${activo !== 4 && "displayNone"}`}>

            <div className="refencias-cont">
                <div style={divStyle} className="referencias-list">
                    {info4.map((el, index) => 
                    (<div className={`${botonActivo === index && "activo" }`} 
                    onClick={() => HandlerBoton3(index, el.comentario)} >
                        <img src={require(`../../assets/img/${el.foto}.webp`)} />
                    </div>))}
                </div>
            </div>
            <p className="referencias-desc">{referencia}</p>

            <form action="https://formsubmit.co/exe116robles@gmail.com" method="POST">
                <p className="sujeto-referencia">Link de tu linked in</p>
                <div className="formulario-espacios">
                    <input className="form-linkend" type="text" name="Linkedin"/>
                    <textarea name="ExperienciaConmpartida"
                    placeholder="Deja un comentario de como fue tu experiencia."></textarea>
                    <input className="form-submit" type="submit" />
                </div>
            </form>

        </div>
            
    );
}

export { Referencias };