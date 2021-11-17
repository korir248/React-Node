import React from 'react'
import { useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from 'react-redux';

const Cart = ()=> {
    const {cart} = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const removingCartItem = (id)=>{
        dispatch(removeFromCart(id))
    } 

    const emptyingCart = ()=>{
        dispatch(emptyCart())
    }
    console.log(cart.length)

    // const getTotal = (price, quantity)=>{
    //     return price *quantity
    // }
    // useEffect(() => {        
        
    // }, [cart])

    return (
        <div>
            <div>
            <p className="section-title">Cart</p>
                <table className="my-cart">
                <thead>
                    <tr>
                        <td>Make</td>
                        <td>Model</td>
                        <td>Price</td>
                        <td>Mileage(Kms)</td>
                        <td>Quantity</td>
                        <td><button className="remove" onClick={()=>emptyingCart()}>Empty Cart</button></td>
                    </tr>
                </thead>
                <tbody>
                {/* {cart.length == 0 ? () : } */}
                
                {cart.map(singleCar=>(
                    <tr className="cart-row" key={singleCar.id}>
                        <td>{singleCar.make}</td>
                        <td>{singleCar.model}</td>
                        <td>{singleCar.price}</td>
                        <td>{singleCar.mileage}</td>
                        <td>{singleCar.quantity}</td>
                        <td><button className="remove" onClick={()=>removingCartItem(singleCar.id)}>Remove</button></td>
                    </tr>
                ))}
                {/* <tr>
                    <td className="grand-total">Grand total</td>
                </tr> */}
                </tbody>
                </table>
                
            </div>
        
        </div>
    )
}

export default Cart
