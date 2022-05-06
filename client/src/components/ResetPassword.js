import React, {useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import back from './brokenhill180100193.jpg';
import { useCallback, useRef , useEffect } from "react";



const ResetPassword =() =>{
    

const [password ,setPassword] =useState("");




  const errRef= useRef();
  const [errMsg, setErrMsg]=useState(""); 

  const initialvalues={password:"" };

  const [formValues ,setFormValues] =useState(initialvalues);
    const [formErrors ,setFormErrors] =useState({});
    const [isSubmit, setIsSubmit] = useState(false); 

        const handleChange=(e) =>{
            const {name,value }  =e.target ;
            setFormValues({...formValues,[name]:value});
            setIsSubmit(true)    
        }
//laset version 


const onChange = e =>{
  setInputs({ ...inputs, [e.target.name] : e.target.value });
}

  const [inputs, setInputs] = useState({
    password: ""
  });
  const { emai } = inputs;

  const onSubmitForm = async e => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    e.preventDefault();  
    try {
      const body = { password };
      const response = await fetch("http://localhost:5000/reset", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(response =>{
     this.props.history.push("/login");
    })

 } catch (err) {
      console.error(err.message);
    } 
    }; 
    useEffect(()  =>{
      setErrMsg('');
    }, [password])
  
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
   
          if(!values.password){
           errors.password =" password is required !!"
          }
           return errors ;
      
       }

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
            <h2>Forget Password</h2>
  <form onSubmit={onSubmitForm}>
  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

           <div>
            
                  <input type="password"
                   className="name"
                    name="password"
                    placeHolder="New Password"
                    value={password}
                    onChange={e =>  setPassword(e.target.value)}
                  />
<p style={{color:"red"}}>{formErrors.password}</p>
            </div>
       
            <div className="login-button">
                  <button type='submit' className='buttonLog'>Login</button>
            </div>

            <p className="link">
                  <Link to="/register"> Create a Count ?</Link>   
                  <Link to="/login"> Login ?</Link>

            </p>

              </form>
          </div>
      
        </div>


      </div>
   </div> 
 




        </div>
    )
}

export default ResetPassword ;