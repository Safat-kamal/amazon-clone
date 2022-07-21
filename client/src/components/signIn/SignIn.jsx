import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth} from '../../externals/firebase/firebase';
import AlertNotification from '../alert/AlertNotification';
import { useContextValue } from '../../externals/ContextAPI/StateProvider';
import './SignIn.css';


const SignIn = () => {
  const [credentials,setCredentials] = useState({ email : "", password: ""});
  const [processing,setProcessing] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [alertInfo,setAlertInfo] = useState({message : "",type: ""});
  const [{cart}]  = useContextValue();
  const navigate = useNavigate();

  const againshowHandler = (value)=>{
    if(value){
      setAlertInfo({
        message : "",
        type: "",
      });
    }
  }


  const handleChange = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const sign = (e)=> {
    e.preventDefault();
    setProcessing(true);
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
      setProcessing(false);
      if(cart.length > 0){
        navigate("/payment");
      }
      else{
        navigate("/");
      }
    })
    .catch((error) => {
      setProcessing(false);
      setAlertInfo({
        message : error.message,
        type: "error"
      });
      setShowAlert(true);
    });
  }

  return (
    <div className='sign-in'>
      <Link to="/"><img className='logo' src="https://i.pinimg.com/originals/11/44/b7/1144b71d6d569a79b7a606649e9635c1.png" alt="" /></Link>
      <div className="signIn__container">
        <div className="singIn_form">
        {showAlert && <AlertNotification againshowHandler={againshowHandler} message={alertInfo.message} type={alertInfo.type} />}
            <h5 className="sign_title">Sign-In</h5>
            <form id="signIn_form">
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange}/>

                <button type='submit' onClick={sign} className="signIn_button">{processing?"processing....":"Sign-In"}</button>
            </form>
            <small className="terms">By continuing, you agree to Amazon's <span className="condition">Conditions of Use</span> and <span className="privacy">Privacy Notice.</span></small>
        </div>

        <div id="new_userTitle">
            <span className="underline"></span>
            <p className="new_userTitle">New to Amazon?</p>
        </div>
        <Link to="/register"><button className="create_button">Create your Amazon account</button></Link>
      </div>
    </div>
  )
}

export default SignIn
