import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../externals/firebase/firebase';
import AlertNotification from '../alert/AlertNotification';
import './Register.css';

const Register = () => {
  const [inputs,setInputs] = useState({name : "", mobile_number : "", email :"", password : ""});
  const [processing,setProcessing] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [alertInfo,setAlertInfo] = useState({message : "",type: ""});


  const againshowHandler = (value)=>{
    if(value){
      setAlertInfo({
        message : "",
        type: "",
      });
    }
  }

  const handleInputs = (e)=> {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    });
  }

  const register = (e)=>{
    e.preventDefault();
    setProcessing(true);
    if(inputs.name !== '' && inputs.mobile_number !== '' && inputs.email !== '' && inputs.password !== ''){
      createUserWithEmailAndPassword(auth, inputs.email,  inputs.password).then((userCredentials)=>{
        setProcessing(false);
        if(userCredentials){
          setInputs({
            name : "",
            mobile_number : "",
            email :"",
            password : ""
          });
          setAlertInfo({
            message : "User Registered Successfully!",
            type: "success"
          });
          setShowAlert(true);
        }
      }).catch((error)=>{
        setProcessing(false);
        setAlertInfo({
          message : error.message,
          type: "error"
        });
        setShowAlert(true);
      });
    }
    else{
      setAlertInfo({
        message : "All Fields are Required",
        type: "warning"
      });
      setShowAlert(true);
    }
  }


  return (
    <div className='register'>
        <Link to="/"><img className='logo' src="https://i.pinimg.com/originals/11/44/b7/1144b71d6d569a79b7a606649e9635c1.png" alt="" /></Link>
        <div className="register__container">
          <div className="register_form">
            {showAlert && <AlertNotification againshowHandler={againshowHandler} message={alertInfo.message} type={alertInfo.type} />}
              <h5 className="register_title">Create Account</h5>
              <form id="register_form">
                  <label htmlFor="name">Your Name </label>
                  <input type="text" name="name" id="name" placeholder='First and last name' value={inputs.name} onChange={handleInputs}/>

                  <label htmlFor="mobile_number"> Mobile Number</label>
                  <input type="text" name="mobile_number" id="mobile_number" placeholder='Mobile Number' minLength={10} maxLength={15} value={inputs.mobile_number} onChange={handleInputs}/>

                  <label htmlFor="email">Email </label>
                  <input type="email" name="email" id="email" placeholder='Email Address' value={inputs.email} onChange={handleInputs}/>

                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='At least 6 characters' minLength={6} value={inputs.password} onChange={handleInputs}/>

                  <button type='submit' onClick={register} className="register_button">{processing ? "processing...":"Register"}</button>
              </form>
              <small className="terms">Already have an Account? <span className="signin_action"><Link to="/sign-in">Sign in</Link></span></small>
          </div>
      </div>
    </div>
  )
}

export default Register
