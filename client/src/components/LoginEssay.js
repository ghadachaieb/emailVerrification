import React, {useState} from 'react'; 
import '../App.css'; 
import { useCallback, useRef , useEffect } from "react";
import back from './brokenhill180100193.jpg'; 
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';



const LoginEssay = ({setAuth}) => {
 
 
 /* const errRef= useRef();
  const [errMsg, setErrMsg]=useState(""); 

  const initialvalues={email:"" ,password:""};

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
*/
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { email, password } = inputs;

  const onSubmitForm = async e => {
    e.preventDefault()
   /* setFormErrors(validate(formValues));
    e.preventDefault();  */
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
  
      if(parseRes.jwtToken){
        localStorage.setItem("jwtToken", parseRes.jwtToken);
        setAuth(true);
        toast.success("login successfully"); 

      }else {
        setAuth(false);
        toast.error(parseRes);
      }


    } catch (err) {
      console.error(err.message);
    } 
    }; 
  /*  useEffect(()  =>{
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
         
          if(!values.password){
           errors.password =" password is required !!";
         }
             return errors ;
      
       }
*/
  return (
    <h1>test</h1>
//     <div className='test'>
//     <div className="main">
//       <div className="sub-main">
//         <div>
//           <div className="imgs">
//             <div className="container-image">
//               <img src={back} alt="profile" className="profile" />
    
//             </div>


//           </div>
//             <div> 
//             <h2>Login Page</h2>
//   <form onSubmit={onSubmitForm}>
//  {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
// */}
//            <div>
            
//                   <input type="email"
//                    className="name"
//                     name="email"
//                     placeHolder="Email"
//                     //value={email}
//                  //   onChange={e => onChange(e)}
//                   />
// {/*<p style={{color:"red"}}>{formErrors.email}</p>*/}
//             </div>
//             <br></br>
//             <div className="second-input">
            
//               <input 
//                     type="password"
//                     name="password"
//                     placeHolder="Password"
//                  //   value={password}
//                   //  onChange={e => onChange(e)}
//                  className="name" />
// {/*<p style={{color:"red"}}>{formErrors.password}</p>*/}

//             </div><br></br>
//             <div className="login-button">
//                   <button type='submit' className='buttonLog'>Login</button>
//             </div>

//             <p className="link">
//                   <Link to="/register"> Create a Count ?</Link>   
//                   <Link to="/password"> Forget Password ?</Link>

//             </p>

//               </form>
//           </div>
      
//         </div>


//       </div>
//    </div> 
//     </div> 
  )
}; 

export default LoginEssay
