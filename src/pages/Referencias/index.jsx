import { useState } from "react";
import { Layout } from "../../components";

function Referencias(props) {

    
    return (
        <Layout>            
            
            <div className="referecias">

                <div className="refencias-cont">
                    <div className="referencias-list">
                        <div></div>
                        <div></div>
                        <div className="activo"></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className="referencias-desc">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>

                <form>
                    <p className="sujeto-referencia">Link de tu linked in</p>
                    <div className="formulario-espacios">
                        <input className="form-linkend" type="text" />
                        <textarea 
                        placeholder="deja un comentario de como fue tu experiencia"></textarea>
                        <input className="form-submit" type="submit" />
                    </div>
                </form>

            </div>
            

        </Layout>
    );
}

export { Referencias };