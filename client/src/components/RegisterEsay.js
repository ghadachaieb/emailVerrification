import React, {useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import back from './brokenhill180100193.jpg';
//import { useCallback, useRef , useEffect } from "react";

const RegisterEsay = ({ setAuth }) => {


  /*  const errRef= useRef();
    const [errMsg, setErrMsg]=useState(""); 
  
    const initialvalues={email:"" ,password:"",nom:""};
  
    const [formValues ,setFormValues] =useState(initialvalues);
      const [formErrors ,setFormErrors] =useState({});
      const [isSubmit, setIsSubmit] = useState(false); 
  
          const handleChange=(e) =>{
              const {name,value }  =e.target ;
              setFormValues({...formValues,[name]:value});
              setIsSubmit(true)    
          }
  //laset version 
  
  */
  const onChange = e =>{
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  }
  
    const [inputs, setInputs] = useState({
      email: "",
      nom:"" ,
      password: ""
    });
    const { email, password ,nom} = inputs;
const onSubmitForm = async e => {
    e.preventDefault()
   /* setFormErrors(validate(formValues));
    e.preventDefault();  */
       try {
        const body = { email, password, nom };
      const response = await fetch(
          "http://localhost:5000/auth/register", {
              method: "POST",
              headers: {
                  "Authorization": "token",
                  "Content-Type": "application/json" 
              }, 
              body: JSON.stringify(body)  
          }

      ); 

        const parseRes = await response.json();
        if(parseRes.jwtToken){
            localStorage.setItem("jwtToken", parseRes.jwtToken); 
            setAuth(true); 
            toast.success("Register successfully");   
        }else{
            setAuth(false); 
            toast.error(parseRes); 
        }

    } catch (err) {

        console.error(err.message); 
    }
}; 
/*
useEffect(()  =>{
    setErrMsg('');
  }, [email,password])

  const fetchBusinesses = useCallback(() => {
}, [])
useEffect(()  =>{
  fetchBusinesses()
}, [fetchBusinesses])
const useFormInput = initialValue => {
const [value, setValue] = useState(initialValue);
const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
const validate =(values)  =>{
    const errors={};
 
        if(!values.email){
         errors.email =" email is required !!"
        }
       
        if(!values.nom){
            errors.nom =" name is required !!";
          }
        if(!values.password){
         errors.password =" password is required !!";
       }
           return errors ;
    
     }
*/
    return (
        <div className='test'>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={back} alt="profile" className="profile" />

                            </div>


                        </div>
                        <div>
                            <h2>  Sign Up Page  </h2>
                            <form onSubmit={onSubmitForm}>
 {/*<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    */}                        <div>
                                
                                <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="email"
                                        onChange={e => onChange(e)}
                                  className="name" 
                    
                                  />            
          {/* <p style={{color:"red"}}>{formErrors.email}</p>*/}
                            </div>
                         
                        
<br></br>
                            <div>
                             
                                <input
                                type="text"
                                placeholder="user name"
                                className="name" 
                                onChange={e => onChange(e)}
                                value={nom}
                                name="nom"
                                   />
               {/*     <p style={{color:"red"}}>{formErrors.nom}</p>*/}
                            </div><br></br>
                            <div className="second-input">
                               
                                <input 
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="password"
                                        onChange={e => onChange(e)}
                                className="name" />             
{/*<p style={{color:"red"}}>{formErrors.password}</p>*/}

                            </div><br></br>
                            <div className="login-button">
                                <button className='buttonLog'> Register </button>
                            </div>



                            <p className="link">
                                    <Link to="/login"> Login</Link>
                           
                            </p>

                            </form>
                        </div>
                   
                    </div>


                </div>
            </div>
        </div>
    ); 
}

export default RegisterEsay
