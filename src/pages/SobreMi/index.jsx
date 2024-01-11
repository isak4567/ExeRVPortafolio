
import { Layout, Experiencia } from "../../components";
import { FaChalkboardTeacher, FaStar, FaBook, FaBookmark } from "react-icons/fa";

function SobreMi(props) {



    
    return (
        <Layout>            
            
            <div className="SobreMi">
                
                <div className="SobreMi-nav">

                    <div>
                        <FaChalkboardTeacher />
                        <p>Experiencia</p>
                    </div>
                    <div>
                        <FaStar />
                        <p>Habilidades</p>
                    </div>
                    <div>
                        <FaBook />
                        <p>Educación</p>
                    </div>
                    <div>
                        <FaBookmark />
                        <p>Valores</p>
                    </div>

                </div>

                <div className="SobreMi-Seccion">

                    <Experiencia />

                </div>

            </div>

        </Layout>
    );
}

export { SobreMi };