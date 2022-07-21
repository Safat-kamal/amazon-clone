import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getTotalCartAmount } from '../../externals/ContextAPI/reducer';
import { useContextValue } from '../../externals/ContextAPI/StateProvider';
import './Checkout.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link, useNavigate, } from 'react-router-dom';

const Checkout = () => {
  const [{cart},dispatch]  = useContextValue();
  const navigate = useNavigate();

  const remove_from_cart = (name)=>{
    dispatch({
      type : "REMOVE_FROM_CART",
      name : name
    })
  }

  return (
    <div className='checkout'>
        <div className="chekout__left">
            <h2 className="checkout__leftTitle">Shopping Cart</h2>
            <hr />
            {cart.length > 0 ? cart.map((product,index)=>{
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
            }) :<div className="product_row_empty">
                  <h2 className='cart_emptyText'>Cart is Empty</h2>
                  <Link to="/"><button>Continue Shopping</button></Link>
                </div>}

        </div>
        <div className="checkout__right">
          <CurrencyFormat
            renderText={(value)=>(
              <>
                <p><span className="subtotal_itemCount">Subtotal ({cart.length} items):</span> <span className="subtotal_price">{value}</span></p>
              </>
            )}
            decimalScale={2} value={getTotalCartAmount(cart)} displayType={'text'} thousandSeparator={true} prefix={'₹'}
          />
            <button className="proceees_pay" onClick={(e)=> navigate("/payment")}>Proceed to Buy</button>
        </div>
    </div>
  );
}

export default Checkout;
