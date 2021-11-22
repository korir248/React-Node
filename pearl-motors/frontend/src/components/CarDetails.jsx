import React from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";
import AddRemoveFromCart from './mini components/AddRemoveFromCart';

const CarDetails = () => {
    const {cars,cart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const {id}= useParams()
    console.log(id);

    const car =cars.filter(car=>car.id === parseInt(id))

    console.log(typeof(id));
    console.log(car)
    const itemInCart = cart.find(cartItem=>cartItem.id === parseInt(id))
    console.log(itemInCart);

    const addingToCart=(id)=>{

        console.log("Adding to Cart...")

        dispatch(addToCart(id))    
    }
        

    return (
        <div className="car-detail-div">
            
                {car?.map(singleCar=>(
                <div key={singleCar.id}>
                    <p className="car-detail-title">Details for: {singleCar.make} {singleCar.model}</p>
                <div className="single-car-details" key={singleCar.id}>
                    
                    <div className="car-details-image">
                    
                        <img className="car-image single-car-image" src={singleCar.image} alt={singleCar.make} height="400px"/>
                    
                    </div>
                    <div className="car-details">
                        <p>Make: {singleCar.make}</p> 
                        <p>Model: {singleCar.model}</p>
                        <p>Mileage: {singleCar.mileage}</p>
                        <p>Year of Production: {singleCar.year_of_prod}</p>
                        <p>Price: Ksh. {singleCar.price}</p>
                        <p>Fuel: {singleCar.extra_details.fuel}</p>
                        <p>Transmission: {singleCar.extra_details.transmission} </p>
                        <p>Engine size: {singleCar.extra_details.engine_size} </p>
                        {itemInCart ? <AddRemoveFromCart id={singleCar.id}/>
                                    : <button className="addtoCartBtn button" onClick={()=>addingToCart(singleCar.id)}>Add to cart</button>
                                }
                    </div>
                </div>
                        
                </div>)
                )}
        </div>
    )

}

export default CarDetails
