import { useState, useEffect } from "react";
import { LayoutPc, LayoutMovil } from "../components/Layout";
import { Loading } from "../components";
import './style.css';

function App() {

  const [loading, setLoading] = useState("false");
  const [computerView, setComputerView] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setComputerView(false);
    }
    
    setLoading("false");
    const loadingTime = () => {
        setTimeout(()=> setLoading("true"), 6000);
    };

    if (sessionStorage.getItem("loading") === "true") {
        setLoading("true");
    } else {
        loadingTime();
        sessionStorage.setItem("loading","true");
    }
  },[]);
  
  return (

      <div className="Main">     
        { loading === "false" && <Loading />}
        { (loading === "true" && computerView === true)  && <LayoutPc />}
        { (loading === "true" && computerView === false)  && <LayoutMovil />}
      </div>
  );
}

export default App;
