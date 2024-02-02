import { useState } from "react";
import { Layout, Trabajo } from "../../components";
import { FaArrowRight } from "react-icons/fa";

function Portafolio(props) {

    const [ active, setActive ] = useState(0);
    const [ move, setBackmove ] = useState(0);

    const divStyle = {
        transform: `translateX(${move}px)`
      };
    
    return (
        <Layout>            
            
            <div style={divStyle} className="lista-trabajos">
                
                <Trabajo active={active} OnClick={setActive} number={0} OnClick2={setBackmove} backmove={0}/>
                <Trabajo active={active} OnClick={setActive} number={1} OnClick2={setBackmove} backmove={-240}/>
                <Trabajo active={active} OnClick={setActive} number={2} OnClick2={setBackmove} backmove={-480}/>
                <Trabajo active={active} OnClick={setActive} number={3} OnClick2={setBackmove} backmove={-720}/>
                <Trabajo active={active} OnClick={setActive} number={4} OnClick2={setBackmove} backmove={-960}/>
                <Trabajo active={active} OnClick={setActive} number={5} OnClick2={setBackmove} backmove={-1200}/>
            </div>

            <div className="portafolio-bt-D">
                <button><FaArrowRight /></button>
            </div>

        </Layout>
    );
}

export { Portafolio };