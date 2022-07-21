import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import {auth} from './externals/firebase/firebase';
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useContextValue } from './externals/ContextAPI/StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Payment from './components/payment/Payment';
import Orders from './components/orders/Orders';
import Order from './components/order/Order';
import PurchaseResult from './Pages/PurchaseResult';
import NotFound from './Pages/404';


function App() {
  const [,dispatch]  = useContextValue();
  const stripePromise = loadStripe('pk_test_51KWiRrSBQ5K8HuO3XJUB1A7FE0c7469oDsU9uA1JIw5Q7ilNrzCO2g3RMNmt6muJ0FW6Q32SaQZTOoDhpkcsmTiq004ZNM4lu1');


  useEffect(()=>{
    onAuthStateChanged(auth, (credentials) => {
      if (credentials) {
        dispatch({
          type : "SET_USER",
          user : credentials
        });
      } else {
        dispatch({
          type : "SET_USER",
          user : null
        });
      }
    });
    // eslint-disable-next-line
  },[]);


  return (
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/" element={ <> <Header/> <Home/> </>}/>
            <Route exact path="/sign-in" element={<SignIn/>}/>
            <Route exact path="/register" element={<Register /> }/>
            <Route exact path="/checkout" element={ <> <Header/> <Checkout/> </>}/>
            <Route exact path="/payment" element={ <Elements stripe={stripePromise}><Payment/></Elements>}/>
            <Route exact path="/orders" element={<><Header/> <Orders/> </>}/>
            <Route exact path="/order/:orderId" element={<><Header/> <Order/> </>}/>
            <Route exact path="/Response" element={<><Header/> <PurchaseResult/> </>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
