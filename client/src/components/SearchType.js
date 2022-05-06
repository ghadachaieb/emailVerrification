import React, { Fragment , useEffect , useState }  from "react";
import EditModel  from "./EditModel";

const SearchType = () => {
  

    const [modele, setModele] = useState([]); 
//    const [id, setId] = useState([]); 
    const [idtype, setIdtype] = useState([]); 
    const [tiers, setTypeTier] = useState([]); 


  //delete function 
  const deleteModele = async (id) => {
    try {
     const deleteModele = await fetch(`http://localhost:5000/modele/${id}`,{
         method: "DELETE"
     }); 
      //console.log(deleteModele); 
      setModele(modele.filter(modele => modele.idmodele !== id)) 
    } catch (err) {
        console.error(err.message); 
    }
}; 

    const getSearchCode = async () => {
        try {
            const response = await fetch(`http://localhost:5000/ModeleP`); 
            const jsonData = await response.json(); 
            setModele(jsonData); 

           // console.log(jsonData); 
        } catch (err) {
            console.log(err.message); 
            
        }
    }
    useEffect(() => {
        getSearchCode();
        }, []); 
    
        
////////////////////////////////
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
///////////////////////////////////////////////
      


        const handleTT = (event) =>{
            const getType = event.target.value;
            console.log(getType);
            setIdtype(getType);
          }        
return (
        <div>
               <form > 
            <div className="form-inline"  style={{width:200,marginInlineStart:1100}}>
                    <div className="input-group-append">
                 <select name="id" placeholder="Search type model "
                  className="form-control" onChange={(e)=>handleTT(e)}>
                   <option>--Select Type--</option>
                   {
                     tiers.map( (getcon)=>(
                   <option key={getcon.id} value={getcon.idtype}> { getcon.nametype}</option>
                     ))
                }
                 
                 </select>
             
 <button className="btn btn-info"  style={{width:50}}  onClick={() => {getSearchCode()}}/*onClick={() =>{  SearchModele(id)}}  */ >
 <i className="fas fa-search fa-fw" />  </button> 
     </div>   <br></br>     
 <p>{idtype}</p>  
  </div>
  </form>
                <h2 className="text-center mt-5"> Liste Models </h2>
                <form  style={{width:1000,marginInlineStart:320}}>
            
            <table className="table mt-5 text-center"  >
                <thead  >
                  <tr>
                    <th >id Model  </th>
                    <th > Name model </th> 
                   
                    <th  > Name Tier </th>  
                    <th  > Type model</th>
                    <th style={{width: 60, justifyContent: 'center',marginInlineStart:50 }}> </th>
                 
                  </tr>
                </thead>
                <tbody >
 {modele.map(model => (
                 <tr key={model.idmodele   }  >
                <td >{ model.idmodele }</td>
                <td >{ model.name }</td>
                <td >{ model.nametier }</td>
                <td>{model.nametype}</td>
               <td class="project-state">
            </td>
                     <td  > <EditModel model={model} /> </td>
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
export default SearchType; 