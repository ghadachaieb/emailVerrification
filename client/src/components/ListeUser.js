import React, { Fragment , useEffect , useState }  from "react";
import EditUser from "./EditUser";
import { FaSearch } from "react-icons/fa";

const ListeUser = () => {
  const [utilisateur, setUser] = useState([]); 

 // const [roles, setRoles] = useState([]); 
 const [role, setRoleName] = useState([]); 

  //delete function 
  const deleteUser = async (id) => {
      try {
       const deleteUser = await fetch(`http://localhost:5000/users/${id}`,{
           method: "DELETE"
       }); 
        console.log(deleteUser); 
       setUser(utilisateur.filter(utilisateur => utilisateur.iduser !== id)) 
      } catch (err) {
          console.error(err.message); 
      }
  }; 

const getUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/users"); 
        const jsonData = await response.json(); 

        setUser(jsonData); 
       
       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
    useEffect(() => {
    getUser();
    }, []); 

    console.log(utilisateur); 

    const getRoleUser = async () => {
      try {
          const response = await fetch("http://localhost:5000/RoleUser"); 
          const jsonData = await response.json(); 
  
          setUser(jsonData); 
         
         // console.log(jsonData); 
      } catch (err) {
          console.log(err.message); 
          
      }
  }
      useEffect(() => {
      getRoleUser();
      }, []); 
  
      console.log(role); 
    
      const getUserName = async (id) => {
        try {
            const response = await fetch("http://localhost:5000/RoleUser/${id}",{
              method: "GET"
          });
            const jsonData = await response.json(); 
    
            setRoleName(jsonData); 
           
           // console.log(jsonData); 
        } catch (err) {
            console.log(err.message); 
            
        }
    }
        useEffect(() => {
        getRoleUser();
        }, []); 
    
        console.log(role); 
 
        const handleCode = (event) =>{
          const getCodeId = event.target.value;
          console.log(getCodeId);
          setRoleName(getCodeId);
        }
return (

<Fragment   style={{width:1000,marginInlineStart:320}}>
    {""}
 
 
    <div style={{marginInlineStart:1100}}>
  <input type="text"  style={{width:200}}
   className="form-control"
   placeholder="Search role user"
   //value={name}
  onChange={(e)  => handleCode(e)}
   name="name" />
  <button type="submit" style={{width: '50px'}}  onClick={getUserName}><FaSearch/></button>

</div>{role}
    <h2 className="text-center mt-5"> Liste Users </h2>
 
 
    <form  style={{width:1000,marginInlineStart:320}}>

<table className="table mt-5 text-center"  >
    <thead  >
      <tr>
        <th >id User  </th>
        <th  >User Email </th>
        <th >User Role </th>
        <th  class="text-center"> Status </th>
        <th style={{width: 40 , align:200}}> Actions</th>
      </tr>
    </thead>
    <tbody >
  
    
   {utilisateur.map(user => (
     <tr key={user.iduser   }  >
    <td >{ user.iduser }</td>
    <td >{ user.email }</td>
    <td>{user.role_name}</td>
   <td class="project-state">
<span class="badge badge-success">Success</span>
</td>
         <td  > <EditUser user={user} /> </td>
         <td>
  <button className="btn btn-danger"  onClick={() =>{  if ((window.confirm('Are you sure you to delete this user ?')) === true ){
           deleteUser(user.iduser)
         } 
         else{this.onSave(user.iduser) } 
         }
      } > Delete</button> </td>     </tr> 
 
   ) )}

    </tbody>
  </table>


</form>
</Fragment>

)


}
export default ListeUser ; 