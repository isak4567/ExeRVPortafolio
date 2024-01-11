
import { useState, createContext } from 'react';


const authContext = createContext();

function AuthProvider({ children }) {


  // var projects
  const [projectIn, setProjectIn] = useState({});


  return (
    <authContext.Provider value={{
      projectIn, setProjectIn
    }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };