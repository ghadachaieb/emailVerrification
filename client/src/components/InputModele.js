import React , {Fragment, useState , useEffect} from "react";
import { render } from "react-dom";
//import Model from "./DefinirModel";
const InputModele = () => {

const [ghada, setGhada] = useState([]); 
const [codeid ,setCodeId] = useState('');
const [tiers, setTypeTier] = useState([]); 
const [name, setName] = useState(""); 
const [file , setFile] = useState("");
const [codetier, setCodeTier] = useState(""); 
//const [nametier, setNameTier] = useState(""); 

const initialvalues={name:"",idtype:"", file:"",codetier:""};
const [formValues ,setFormValues] =useState(initialvalues);
const [formErrors ,setFormErrors] =useState({});
const [isSubmit, setIsSubmit] = useState(false); 
const [st ,setSt ] =useState([]);
//const [namet ,setName1] = useState('');
const [idtype ,setType1] = useState('');
//const [getd , setGets] = useState ([]);



const handleChange=(e) =>{  
    const {name,value }  =e.target ;
    setFormValues({...formValues,[name]:value});
    setIsSubmit(true) 
 //   this.setState({multiValue: [...e.target.selectedOptions].map(o => o.value)}); 
   
     
}

const onSubmitForm = async e => {
  <p>{file}{codetier}{idtype}{name}   </p>
    e.preventDefault();
    setFormErrors(validate(formValues));
    e.preventDefault();     
    try {
     const body = { name,idtype,file,codetier}; 
        const response = await fetch("http://localhost:5000/modele", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
            }); 
        window.alert("Success added  Modele  !!!!!");
     console.log(response); 

    } catch (err) {
        console.error(err.message); 
        }}; 

        useEffect (()  =>  {
            console.log (formErrors);
              if(Object.keys(formErrors).length === 0 && isSubmit){
              }
            },[formErrors]);
 const validate =(values)  =>{
               const errors={};

               if (!values.name) {
                 errors.name = "Name is required !! ";
             
               }
               if (!values.codetier) {
                errors.codetier = "Name Tier is required !! ";
            
              }
               return errors ;
               
                }

 //////////////////////////////////////////////////////////////////////////
 useEffect(() => {
 const getModell = async () => {
    try {
        const response = await fetch("http://localhost:5000/ModeleType1"); 
        const getModel = await response.json();
        console.log(getModel);
        setTypeTier(getModel); 
       
       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
 getModell();

}, []);
/////////////////////////////////////////////////////////
useEffect(() => {
  const getModell = async () => {
     try {
         const response = await fetch("http://localhost:5000/TypeTier"); 
         const getModel = await response.json();
         console.log(getModel);
         setGhada(getModel); 
        
        // console.log(jsonData); 
     } catch (err) {
         console.log(err.message); 
         
     }
 }
  getModell();
 
 }, []);
 ///////////////////////////////////////////////////////
 /*useEffect(() => {
  const getModell = async () => {
     try {
         const response = await fetch("http://localhost:5000/NameTier/"); 
         const getModel = await response.json();
         console.log(getModel);
         setSt(getModel); 
        
        // console.log(jsonData); 
     } catch (err) {
         console.log(err.message); 
         
     }
 }
  getModell();
 
 }, []);*/
 ////////////////////////////////////////////////////////
   const handleCode = (event) =>{
     const getCodeId = event.target.value;
     console.log(getCodeId);
     setCodeId(getCodeId);
   }
   const handleType = (event) =>{
    const getType1 = event.target.value;
    console.log(getType1);
    setType1(getType1);




  }


////////////////////////////////////// 
return (

 <div>
<i><b><h1 style={{marginInlineStart:50}} className="text-center mt-5">Add new  Modele  </h1></b></i>
<br></br>
      <span className="sr-only">Loading...</span>
<br></br>
<form className="/"   style={{width:1300,marginInlineStart:390}}>
<table><tr><td>
<label>Name Modele :</label>
 <input type="text"  style={{width:300}} className="form-control" name="name" onBlur={handleChange}
 placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
 <p  style={{color:"red"}}>{formErrors.name}</p>
 </td><td>

 <label style={{marginInlineStart:100}}>Type Model :</label>    
 <select className="form-control" style={{width:300,marginInlineStart:100}} name="type"  onChange={(e)  => handleType(e)} >
 <option disabled selected > -- Select one --</option>
 {tiers.map ((mod) => (
<option key={mod.id} value={mod.idtype} > {mod.nametype}  </option> ))}
</select>
</td>
</tr><br></br><tr><td>
<label>Tiers Model :</label>
<select className="form-control" style={{width:300}} name="tiers"  onChange={(e)  => handleCode(e)}>
 <option disabled selected > -- Select one --</option>
 {ghada.map ((tiers) => (
<option key={tiers.code} value={tiers.typetier} > {tiers.typetier}  </option> ))} </select>
</td><td>
<label style={{marginInlineStart:100}}> Create the specific : { codeid } </label>
{/*
<select className="form-control" style={{width:300,marginInlineStart:100}}
 id="code"  name="tier"   onChange={(e)  => handleName(e)}  >
  <option disabled selected > -- Select one --</option>
{st.map ((tt) => (
     <option  key={tt.ti} value={tt.nametier}  >  { tt.nametier}  </option>
      ))}
</select>*/}



<input type="text"  style={{width:300,marginInlineStart:100}} className="form-control" name="codetier" onBlur={handleChange}
 placeholder="name" onChange={e => setCodeTier(e.target.value)} />
 <p  style={{color:"red",marginInlineStart:100}}>{formErrors.nametier}</p>
</td></tr><br></br><tr><td>



<label>Define a Model : </label><a  href="/definirModel" class="btn btn-default btn-sm"><i class="fa fa-download"></i> Generate PDF</a>

{/*<button name="file"  className="btn btn-info" >File </button>*/}
</td>
<td>
  <label style={{marginInlineStart:100}}>Choose an existing Model :</label><br></br>
<input  type="file" name="file" style={{marginInlineStart:100}} onChange={e => setFile(e.target.value)} />
</td>
</tr><br></br>
<tr><td>
<a className="btn btn-success" href="/listeModele" ><i class="fa fa-arrow-left"> Back </i> </a>
</td><td> <button className="btn btn-primary" onClick={onSubmitForm} style={{marginInlineStart:330}} > <i class="fa fa-plus" > Add</i></button>
</td></tr>

</table>
</form>

</div>


); 




}; 
export default InputModele; 