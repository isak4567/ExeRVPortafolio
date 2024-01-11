import { Routes, Route } from 'react-router-dom';
import { Home, Portafolio, Referencias, Servicios, SobreMi } from '../pages'
import './style.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portafolio" element={<Portafolio />} />
      <Route path="/Referencias" element={<Referencias />}/>
      <Route path="/Servicios" element={<Servicios />}/>
      <Route path="/SobreMi" element={<SobreMi />}/>
    </Routes>
    
  );
}

export default App;
