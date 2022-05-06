import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';




const Dashboard = ({ setAuth }) => {

  const [nom, setNom] = useState("");
  async function getName() {

    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.jwtToken }
      });

      const parseRes = await response.json();
      //  setNom(parseRes.nom);
      console.log(parseRes);

      setNom(parseRes.nom);



    } catch (err) {
      console.error(err.message);

    }
  };
//function logout 
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token"); 
    setAuth(false); 
  toast.success ("Logged out successfully !"); 

}



  useEffect(() => {

    getName();
  });

  return (
    <Fragment>
      <h1> Dashboard {nom} </h1>
      <button className="btn btn-primary" onClick={e => logout(e)} >
        Logout
      </button>

    </Fragment>
  );
};

export default Dashboard; 
