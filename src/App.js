import { useState } from "react";
import React from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
//import alert1 from "./components/alert1";
//import { BrowserRouter, Route, Routes } from "react-router-dom";


 

 function App() {
  const[mode, setMode]= useState('light');

  /*const[alert,setAlert]=useState('null');

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      ty:type
    })*/

  

  const togglemode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#08244d';
     // showAlert("dark mode has been enabled", "success");
     document.title = 'Text Utils - Dark Mode';

   /* setInterval(() =>{
      document.title = 'Text Utils is Amazing';
    },2000);*/
    
   /* setInterval(() =>{
      document.title = 'Install Text Utils Now ';
    },1700);*/
    }
    else
    {
        setMode('light');
        document.body.style.backgroundColor='white';
        // showAlert("light mode has been enabled", "success");
        document.title = 'Text Utils - Light Mode';
    }
   
  }
  return (
   <>
          {/*<BrowserRouter>*/}
          
          <Navbar title="Textutils3" aboutText="About" mode={mode} togglemode={togglemode} />
          { /*<alert1 alert={alert}/>*/}
          <div className = "container my-3">
          {/*<Routes>
          <Route exact path="/about" element={<About />}>
          
          </Route>
          <Route exact path="/" element={}>
          
          </Route>
  </Routes>*/}
          <Textform heading="ENTER THE TEXT TO ANALYSE BELOW" mode={mode}/>
          </div>
          
      {/*</BrowserRouter>*/}
    </>
  );
}

export default App;



