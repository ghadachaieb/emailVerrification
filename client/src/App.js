/*
import React, { Fragment, useState , useEffect } from "react";
import Login from "./components/Login";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import  { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

toast.configure(); 


function App() {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  
  const setAuth = (boolean) => {
    setIsAuthentificated(boolean);

  }; 
const  isAuth = async () =>
{
  try {
    const response = await fetch("http://localhost:5000/auth/verify", {

      method: "GET",
      headers: { token: localStorage.jwtToken }

    }); 

const parseRes = await response.json(); 
parseRes === true ? setIsAuthentificated(true) : 
setIsAuthentificated(false)

//console.log(parseRes); 

  } catch (err) {
    console.error(err.message); 
  }
}


useEffect(() => {
    isAuth(); 
}, []); 
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/login"
              render={props => 
                !isAuthentificated ?
                (
                <Login {...props} setAuth={setAuth} />) :
                (<Navigate to="/dashboard" />)
              } />
            <Route exact path="/register"
              render={props => !isAuthentificated ?
                (<Register {...props} setAuth={setAuth} />) :
                (<Navigate to="/login" />)} />
          
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthentificated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

          </Routes>


        </div>



      </Router>


    </Fragment>
  );
}



export default App;







*/

import React from "react"; 
import './App.css';
//components 
import InputModele from "./components/InputModele";
import ListeModele from "./components/ListeModele";
import InputType from "./components/InputType";
import Home from "./components/Home";
import RegisterEsay from './components/RegisterEsay' ;
import InputRole  from "./components/InputRole";
import InputUser  from "./components/InputUser";
import {BrowserRouter , Route ,Routes} from "react-router-dom" ;
//import InputUser from "./components/InputUser";
import SideNav from './components/SideNav' ;
import Header from './components/Header' ;
import ListeUser from "./components/ListeUser";
import ListeRole from "./components/ListeRole";
import Models from "./components/Models";
import DefinirModel from "./components/DefinirModel";
import SearchType from "./components/SearchType";
import Profile from "./components/Profile";
import ListeSimpleUser from "./components/ListeSimpleUser" ;
import LoginEssay from "./components/LoginEssay";
import Password from "./components/Password";
import ResetPassword from "./components/ResetPassword";
//import Dashboard from  "./components/Dashboard"
function App() {
    
  return (
    
    <div >
   <SideNav/>
  <Header/>
  <BrowserRouter>   
   
  <Routes> 
  
          <Route exact path="/inputType" element={<InputType/>}/>
          <Route exact path="/listeUser" element={<ListeUser/>}/>
          <Route exact path="/inputUser" element={<InputUser/>}/>
          <Route exact path="/listeRole"  element={<ListeRole/>}/>
          <Route exact path="/inputRole" element={<InputRole/>}/>
          <Route exact path="/inputModele" element={<InputModele/>}/>
          <Route exact path="/listeModele"      element={<ListeModele/>}/>
          <Route exact path="/definirModel" element={<DefinirModel/>}/>
          <Route exact path="/searchtype" element={<SearchType/>}/>
          <Route exact path="/listDemande" element={<ListeSimpleUser />} />
          <Route exact path="/profil" element={<Profile />} />
          <Route exact path="/password" element={<Password />} />
          <Route exact path="/reset/:id" element={<ResetPassword />} />
          <Route exact path="/Models" element={<Models />} />


        


</Routes>  
<Routes>
<Route exact path="/login" element={<LoginEssay/>}/>
   <Route exact path="/register" element={<RegisterEsay/>}/>
</Routes>
  </BrowserRouter>
  
     </div>
  );
}
export default App;