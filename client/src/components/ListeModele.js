import React, { useEffect , useState }  from "react";
import EditModel  from "./EditModel";
//import SearchType from "./SearchType";

const ListeMoele = () => {
  
    const [modele, setModele] = useState([]); 
    const [gets, setGets] = useState([]); 

   
   // const [types, setType] = useState([]); 
    const [id,setId ] =useState([]);

  //delete function 
  const deleteModele = async (id) => {
      try {
       const deleteModele = await fetch(`http://localhost:5000/modele/${id}`,{
           method: "DELETE"
       }); 
       // console.log(deleteModele); 
        setModele(modele.filter(modele => modele.idmodele !== id)) 
      } catch (err) {
          console.error(err.message); 
      }
  }; 
  ///////////////////
 /* const SearchModele = async (id) => {
    try{
    const response = await fetch('http://localhost:5000/modeleName/${id}'); 
    const jsonData = await response.json(); 

    setModele(jsonData); 
   
   // console.log(jsonData); 
} catch (err) {
    console.log(err.message); 
    
}
}; 
useEffect(() => {
  SearchModele();
  }, []); 

  console.log(modele); */
const getModel = async () => {
    try {
        const response = await fetch("http://localhost:5000/modeles"); 
        const jsonData = await response.json(); 

        setModele(jsonData); 
       
       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
    useEffect(() => {
    getModel();
    }, []); 

    console.log(modele); 
 
////////////  searcht 
const getModell = async () => {
  try {
      const response = await fetch("http://localhost:5000/ModeleP"); 
      const jsonData = await response.json(); 

      setGets(jsonData); 
     
     // console.log(jsonData); 
  } catch (err) {
      console.log(err.message); 
      
  }
}
  useEffect(() => {
  getModell();
  }, []); 

  console.log(modele); 

/////////////////////

   const handleCode = (event) =>{
        const getType = event.target.value;
        console.log(getType);
        setId(getType);
      }

  
return (
<div>

  {/*}
<div className="form-inline"  style={{width:100,marginInlineStart:900}}>
                    <div className="input-group-append">
 <input className="form-control" type="text" name="codetier" onChange={e => handleCode(e)} placeholder="Search name modele"/>
<button className="btn btn-info"  style={{width:100}}  onClick={() =>{  SearchModele(id)}}   >
 <i className="fas fa-search fa-fw" />  </button>
</div>
                    <br></br><p>{id}</p>
                </div>*/}
    <h2 className="text-center mt-5"> Liste Models </h2>
    <form  style={{width:1000,marginInlineStart:320}}>
    <p>
<a style={{width:100,marginInlineStart:820}} className="btn btn-info" href="/Models"  ><i class="fa fa-file"> All PDF </i></a>
 </p>
<table className="table mt-5 text-center"  >
    <thead  >
      <tr>
        <th >id Model  </th>
        <th > Name model </th> 
        <th  > Type model</th>
        <th> Name Tier </th>
        <th style={{width: 60, justifyContent: 'center',marginInlineStart:50 }}> </th>
        
      </tr>
    </thead>
    <tbody >
  
    
    {modele.map(model => (
     <tr key={model.idmodel   }  >
    <td >{ model.idmodele }</td>
    <td >{ model.name }</td>
 
   <td>{model.idtype}
    </td> 
   
    <td>{model.codetier}</td>

   <td class="project-state">
</td>
         <td  >         
 <EditModel model={model} /> </td>
         <td>
  {/*<Details className="btn btn-info"  />*/}

  <button className="btn btn-danger"  onClick={() =>{  if ((window.confirm('Are you sure you to delete this model ?')) === true ){
           deleteModele(model.idmodele)
         } 
         else{this.onSave(model.idmodele) } 
         }
      } > Delete</button> </td>     </tr> 
 
   ) )}

    </tbody>
  </table>


</form>
</div>


)


}
export default ListeMoele; 