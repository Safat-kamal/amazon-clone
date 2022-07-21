import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Order.css';
import axios from '../../externals/axios/axios';

const Order = () => {
  const param = useParams();
  const [orders,setOrders] = useState({
    allOrders:[],
    orderTotal:0,
    orderId:null,
    purchasedAt:null
  });

  useEffect(()=>{
    axios.post('/order',{
      orderId : param?.orderId,
    }).then((response)=>{
      setOrders({
        allOrders:response.data[0].orders,
        orderTotal:response.data[0].orderTotal,
        orderId:response.data[0].orderId,
        purchasedAt:response.data[0].createdAt
      })
    }).catch((error)=>{
      console.log(error.message);
    });
    // eslint-disable-next-line
  },[]);


  return (
    <div className='order'>
      <div className="order__header">
        <p className="timestamp"><span>PURCHASED AT:</span> {new Date(orders.purchasedAt).toLocaleString()}</p>
        <p className="orderid"><span>ORDER ID:</span> {orders.orderId}</p>
      </div>
      <h2 className="orderTitle">Order Summary</h2>
    {
      orders.allOrders?.map((order,index)=>{
        return(
          <div className="product_row" key={index}>
            <img src={order.url} alt="" className='product_image'/>
            <div className="product__info">
              <p className="product__name">{order.name}</p>
            </div>
            <p className="product__price">₹{order.price}</p>
          </div>
        )
      })
    }
    <div className="order__footer">
        <p className="ordertotal"><span>ORDER TOTAL:</span> ₹{orders.orderTotal}</p>
      </div>
    </div>
  )
}

export default Order
