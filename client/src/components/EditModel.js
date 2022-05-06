import React , { Fragment , useState,useEffect}  from "react";

const EditModel = ({ model }) => {
    const [name, setName] = useState(model.name);  
    const [idtype, setType] = useState(model.idtype);  
    const [codetier, setCode] = useState(model.codetier); 
    const [st, setSt] = useState([]); 
    const [ghada, settd] = useState([]); 




//edit description function 
const updateModel = async e => {
    e.preventDefault(); 
try {
    const body = { name,idtype,codetier }; 
    const response = await fetch(`http://localhost:5000/modele/${model.idmodele}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(body)
       

    }); 
   console.log(response); 
window.location = "/listeModele"; 

} catch (err) {
    console.log(err.message); 

}

}; 
///////////////////////////////
/*
useEffect (()  =>{
  const getState = async ()=>{
      try {
      const rest =await fetch ('http://localhost:5000/NameTier')
      const getst = await rest.json();
      setSt( getst) ;
  }

      catch (err) {
          console.log(err.message); 
          }
  }
getState();
}, []);
//////////////////////////////
useEffect (()  =>{
  const getState = async ()=>{
      try {
      const rest =await fetch ('http://localhost:5000/ModeleType1')
      const getst = await rest.json();
      settd( getst) ;
  }

      catch (err) {
          console.log(err.message); 
          }
  }
getState();
}, []);
//console.log(role); */
return  (

<Fragment>

<button type="button"
 class="btn btn-warning"
  data-toggle="modal"
   data-target={`#id${model.idmodele}`}>
 Edit 
</button>
<div className="modal" id={`id${model.idmodele}`}>
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal Header */}
      <div className="modal-header">
        <h2 className="modal-title">Edit Model </h2>
        <button type="button" className="close" data-dismiss="modal"  onClick={() => setName(model.name)}>
      x

        </button>
      </div>
      {/* Modal body */}
      <div className="modal-body">
     <label> Name model</label>
       <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
      </div>
      <div className="modal-body">
     <label> Type model</label>
   {/*}  <select className="form-control"  name="tiers" value={nametype} onChange={e => setNameType(e.target.value)} >
 {ghada.map ((tiers) => (
<option key={tiers.nametype} value={tiers.idtype} > {tiers.nametype}  </option> ))} </select>
<br></br>
      */}
      <input type="text" className="form-control" value={idtype} onChange={e => setType(e.target.value)}></input>
      </div>
    <div className="modal-body">
      <label> Name Tier </label>
  {/*}    <select className="form-control"  name="type" value={nametier}  onChange={e => setNameTier(e.target.value)}>
    {st.map ((model)  => ( 
    <option  key={model.nametier} value={model.codetier} > {model.nametier}  </option>
   
    ))}
</select><br></br>*/}
<input type="text" className="form-control" value={codetier} onChange={e => setCode(e.target.value)}></input>

</div>
{/*
     <div className="modal-body">
         <label>  File Modele </label>
  <input type="file" className="form-control" value={file} onChange={e => setFile(e.target.value)}></input>
    </div>*/}
   
      {/* Modal footer */}
      <div className="modal-footer">
      <button type="button" 
      className="btn btn-warning"
       data-dismiss="modal" onClick={e => updateModel(e)}>Edit</button>
        <button type="button"
         className="btn btn-danger" 
         data-dismiss="modal" onClick={() => setName(model.name)}>Close</button>
      </div>
    </div>
  </div>
</div>

</Fragment>
)

}; 
export default EditModel; 