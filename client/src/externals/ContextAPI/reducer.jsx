// initial state
export const initialState = {
    cart : [],
    user: null,
}

// selector use to add subtotal
export const getTotalCartAmount = (CART)=>
    CART?.reduce((amount,product)=> product.price + amount, 0)

    
// dispatch handler function
const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart : [...state.cart, action.product]
            }

        case  "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem)=> cartItem.name === action.name
            );
            
            let newCart = [...state.cart];

            if(index > -1){
                newCart.splice(index,1);
            }

            return {
                ...state,
                cart : newCart
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart : []
            }

        case "SET_USER":
            return {
                ...state,
                user : action.user
            }    
            
        default:
            return state    
    }
}
export default reducer;