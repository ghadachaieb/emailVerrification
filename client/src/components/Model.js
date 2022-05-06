import React, { useState, useEffect } from "react";

function Model() {
  const [country, setCountry]= useState([]);
  const [countryid, setCountryid]= useState('');
  const [stetes, setSat]= useState([]);

  useEffect( ()=>{
   const getcountry= async ()=>{
     const req= await fetch("http://localhost/devopsdeveloper/ModeleType");
     const getres= await req.json();
     console.log(getres);
     setCountry(await getres);

   }
   getcountry();


  },[]);

  const handlecountry=(event)=>{
    const getcoutryid= event.target.value;
    setCountryid(getcoutryid);
    event.preventDefault();
  }

  useEffect( ()=>{

    const getstate= async ()=>{
      const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid }`);
      const getst= resstate.json();
      setSat(await getst);

    }
    getstate();

  },[countryid]);

   
  return (
  
     <div className="row">
       <div className="col-sm-12">
         <h5 className="mt-4 mb-4 fw-bold">Output  { }</h5>
           
             <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label className="mb-2">Country</label>
                 <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
                   <option>--Select Country--</option>
                   {
                     country.map( (getcon)=>(
                   <option key={getcon.country_id} value={getcon.country_id }> { getcon.country_name}</option>
                     ))
                }
                 
                 </select>
               </div>
               <div className="form-group col-md-4">
               <label className="mb-2">State</label>
               <select name="state" className="form-control">
                   <option>--Select State--</option>
                   {
                     stetes.map( (st,index)=>(                    
                   <option key={index} value={st.state_id}>{ st.state_name}</option>
                     ))
                     }
                 </select>
               </div>

               
            </div>
               
       </div>
     </div>
  );
}
export default Model;