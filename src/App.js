
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const bodyremove=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    

  }
  const toggleMode=(cls)=>{
    bodyremove();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark has been enabled","success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light has been enabled","success");
  }
}
  return (
    <>
<Router>
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/> */}
<Routes>
          <Route exact path="/About" element={<About mode={mode}/>} >
          </Route>
          <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>}> 
          
           </Route> 
        </Routes> 
        

</div>
</Router>
    </>
    );
}

export default App;
