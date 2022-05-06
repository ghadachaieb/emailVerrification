import React, {useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import back from './brokenhill180100193.jpg';
//import { useCallback, useRef , useEffect } from "react";
import axios from "axios" ;


const Password =() =>{
    

const [email ,setEmail] =useState("");
const [emailSent ,setEmailSent] =useState("");





  const onSubmitForm = async e => {
    e.preventDefault()
       const body ={
         email,  
       }
axios({
  url : "http://localhost:5000/forgot",
  data : body,
  method:"post",
}).then (res =>{
  setEmailSent(true);
})
  }

   /* setFormErrors(validate(formValues));
    e.preventDefault();  */
     /*   try {
      const body = { email,
       };
  const response = await fetch("http://localhost:5000/forget", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(response =>{
        setEmailSent(true);
      })
let bod;
if  (emailSent){
     bod = (
       <h2>An email with reset instructions is on its way </h2>
     )
}

 } catch (err) {
      console.error(err.message);
    } 
    }; */
/*    useEffect(()  =>{
      setErrMsg('');
    }, [emaill])
  
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
           return errors ;
      
       } */

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
 {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
*/}
           <div>
            
                  <input type="email"
                   className="name"
                    name="email"
                    placeHolder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
            </div>
       <br></br>
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

export default Password ;