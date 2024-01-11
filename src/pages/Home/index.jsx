
import { Layout } from "../../components/Layout";

function Home(props) {



    
    return (
        <Layout>            
            
            <img className="img-sujeto" src={require("../../assets/img/perfil.png")} alt="" />

            <div className="sujeto">
                <h1>Exequiel Robles Vega Diseñador UX/UI</h1>
                <h2>Busco elevar las experiencias.</h2>
            </div>

        </Layout>
    );
}

export { Home };