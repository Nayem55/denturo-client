import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";
import router from "./Routes/Routes/Routes";

function App() {
  const [dark , setDark] = useState(false); 
  const handleTheme= ()=>{
     setDark(!dark)
     localStorage.setItem('dark',!dark)
  }
  useEffect(()=>{
    const mode = localStorage.getItem('dark')
    setDark(JSON.parse(mode));
  },[])
  
  return (
    <div className={`${dark?"dark":"light"}`}>
    <ThemeContext.Provider value={{dark ,setDark ,handleTheme}}>
      <RouterProvider router={router}></RouterProvider>      
      <Toaster />
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
