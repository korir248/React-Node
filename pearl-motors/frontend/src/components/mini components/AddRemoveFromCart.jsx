import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, reduceQuantity} from '../../redux/actions/cartActions';

const AddRemoveFromCart = ({id})=> {

    const {cart} = useSelector(state => state.cart)
    const itemInCart = cart.find(cartItem=>cartItem.id === parseInt(id)) 
       
    const dispatch = useDispatch()
    const increasingQuantity= (id)=>{
        dispatch(increaseQuantity(id))
    }
    const reducingQuantity = (id)=>{
        dispatch(reduceQuantity(id))
    }

    return (
        <div>
            <div>
                <button className="button-add" onClick={()=>reducingQuantity(id)}>-</button>
                {itemInCart.quantity}
                <button className="button-add" onClick={()=>increasingQuantity(id)}>+</button>
            </div>
            
        </div>
    )
}

export default AddRemoveFromCart
