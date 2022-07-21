import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useContextValue } from '../../externals/ContextAPI/StateProvider';


const Product = ({url,name,rating,price,reviews}) => {
  const [,dispatch] = useContextValue();

  const add_to_Cart = ()=>{
    
    dispatch(
      {
        type:"ADD_TO_CART",
        product : {
           "url" : url,
           "name" : name,
           "price" : price, 
        }
      }
    )
  }

  return (
    <div className='product'>
      <img src={url} alt="" />
      {name && <h3 className="product__name">{name}</h3>}
      {rating && <p className="rating">
        <span className="product__rating">
        {[...Array(rating)].map((star,index) => {        
          return (         
              <StarIcon className='star' key={index}/> 
          );
        })}
          </span>
        <span className="rating__number">({reviews} reviews)</span>
      </p>}
      {price && <p className="product__price">₹ {price}</p>}
      <button className="add_toCart" onClick={add_to_Cart}>Add to cart</button>
    </div>
  );
}

export default Product;