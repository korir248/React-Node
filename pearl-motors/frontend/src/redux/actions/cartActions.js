import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, REDUCE_QUANTITY} from '../types'


export const addToCart = (id)=>{
    console.log(id);
    return {
        type: ADD_TO_CART,
        payload: id
        
    }
}

export const removeFromCart = (id)=>{
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const emptyCart = ()=>{
    return {
        type: EMPTY_CART
    }
}

export const increaseQuantity = (id)=>{
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}

export const reduceQuantity = (id)=>{
    return {
        type: REDUCE_QUANTITY,
        payload: id

    }
}


