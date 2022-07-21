import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LockIcon from '@mui/icons-material/Lock';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContextValue } from '../../externals/ContextAPI/StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getTotalCartAmount } from '../../externals/ContextAPI/reducer';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from '../../externals/axios/axios';
import AlertNotification from '../alert/AlertNotification';
import './Payment.css';



const Payment = () => {
    const [clientSecret,setClientSecret] = useState(null);
    const [{user,cart},dispatch]  = useContextValue();
    const [showAlert,setShowAlert] = useState(false);
    const [alertInfo,setAlertInfo] = useState({message : "",type: ""});
    const [disabled,setDisabled] = useState(true);
    const [processing,setProcessing] = useState(false);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const againshowHandler = (value)=>{
        if(value){
          setAlertInfo({
            message : "",
            type: "",
          });
        }
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios.post('/payment/create',{
                amount : parseInt(getTotalCartAmount(cart) * 100)
            });
            setClientSecret(response.data.client_secret);
        }
        getClientSecret();
    }, [cart]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        if (!stripe || !elements) {
          return;
        }
        
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: user?.email,
            },
          }
        });
        
        if (result.error) {
            setProcessing(false);
          setAlertInfo({
            message : result.error.message,
            type: "error"
          });
          setShowAlert(true);
        } else {
            setProcessing(false);
          if (result.paymentIntent.status === 'succeeded') {
            axios.post('/order/create',{
                userId : user.uid,
                orderId : result.paymentIntent.id,
                orders :cart,
                orderTotal : getTotalCartAmount(cart)
            }).then().catch((error)=>console.log(error.message));
            dispatch({
                type:"EMPTY_CART"
            });
            navigate("/Response", { replace: true });
          }
        }
    };

    const handleCardChange = (event)=>{
        setDisabled(event.empty)
    }
    
    useEffect(()=>{
        if((!user || cart.length === 0)){
            navigate("/sign-in");
        }
        // eslint-disable-next-line
    }, []);


    const remove_from_cart = (name)=>{
        dispatch({
          type : "REMOVE_FROM_CART",
          name : name
        })
    }

    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <div className='payment'>
            <div className="payment__header">
            {showAlert && <AlertNotification againshowHandler={againshowHandler} message={alertInfo.message} type={alertInfo.type} />}
                <Link to="/"><img className='logo' src="https://i.pinimg.com/originals/11/44/b7/1144b71d6d569a79b7a606649e9635c1.png" alt="" /></Link>
                <p className="header__title">Checkout</p>
                <a href="https://www.amazon.in/gp/help/customer/display.html" rel="noreferrer" target="_blank"><IconButton><LockIcon /></IconButton></a>
            </div>
            <div className="payment__container">
                <div className="payment__left">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header">
                            <Typography className='title'> 1. Delivery Address</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className="delivery__info">
                                    <p id="email">{user?.email}</p>
                                    <p id="local_addressInfo">80,near primary school, village sahibabad</p>
                                    <p id="gloabal_addressInfo">Ghaziabad,uttar pradesh, IN</p>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header">
                            <Typography className='title'>2. Review Products and Delivery</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {cart?.map((product,index)=>{
                                    return (
                                        <div className="product_row" key={index}>
                                        <img src={product.url} alt="" className='product_image'/>
                                        <div className="product__info">
                                            <p className="product__name">{product.name}</p>
                                            <small className="availablity">In stock</small>
                                            <button className="remove_product" onClick={()=> remove_from_cart(product.name)} > <DeleteForeverIcon fontSize='small'/> Delete</button>
                                        </div>
                                        <p className="product__price">₹{product.price}</p>
                                        </div>
                                    )
                                }) }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="payment__right">
                    <h3 className="order__summary">Order Summary</h3>
                    <CurrencyFormat
                        renderText={(value)=>(
                        <>
                            <p id="order_itemTotal"><span>Item:</span> <span>{value}</span></p>
                        </>
                        )}
                        decimalScale={2} value={getTotalCartAmount(cart)} displayType={'text'} thousandSeparator={true} prefix={'₹'}
                    />
                    <p id="order_deliveryChargeTotal"><span>Delivery:</span> <span>₹0.00</span> </p>
                    <div id="order_total">
                        <CurrencyFormat
                            renderText={(value)=>(
                            <>
                                <p><span className="subtotal_itemCount">Order Total: </span> <span className="total_price">{value}</span></p>
                            </>
                            )}
                            decimalScale={2} value={getTotalCartAmount(cart)} displayType={'text'} thousandSeparator={true} prefix={'₹'}
                        />
                    </div>
                    <div className="payment__form">
                        <p id="payment_formTitle">Payment Details</p>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleCardChange}/>
                            <span id="stripe__logo">
                                <span id="payment_logo">Powered by <sub>Stripe</sub></span>
                            </span>
                            <button disabled={!stripe || disabled}>{processing?"Processing...":"Proceed to Pay"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
