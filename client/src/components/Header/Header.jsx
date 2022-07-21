import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import './Header.css';
import { useContextValue } from '../../externals/ContextAPI/StateProvider';
import {auth} from '../../externals/firebase/firebase';
import {signOut } from "firebase/auth";

const Header = () => {
  const [{cart,user}] =  useContextValue();

  const handleAuthentication = ()=>{
    if(user){
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <div className="header__left">
            <img src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png" alt="" />
        </div>
      </Link>
      <div className="header__center">
        <input type="search" name="search" id="search" />
        <button><SearchIcon/> </button>
      </div>
      <div className="header__right">
        <Link to={!user && "/sign-in"}>
          <div className="header__rightChild" onClick={handleAuthentication}>
            <span>Hello {user ? "User" : "Guest"}</span>
            <span>{user? "Sign Out": "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__rightChild">
            <span>Returns</span>
            <span>& orders</span>
          </div>
        </Link>
        <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer">
          <div className="header__rightChild">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </a>
        <div className="header__rightChild">
          <Link to="/checkout">
            <span><ShoppingBasketIcon/> </span>
            <span> {cart?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
