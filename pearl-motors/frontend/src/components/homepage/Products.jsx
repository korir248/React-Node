import { addToCart } from '../../redux/actions/cartActions'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import AddRemoveFromCart from '../mini components/AddRemoveFromCart';



const Products = ()=>{
    // const {cars} = useSelector(state => state.car)
    
    // console.log(cars)
    
    const {cars, cart} = useSelector(state => state.cart)

    const dispatch = useDispatch()
    
    
    const addingToCart=(id)=>{

        console.log("Adding to Cart...")

         dispatch(addToCart(id))   
    
         
    }
    
    return (
        <div className="container">
        <p className="section-title">Available cars</p>
            <div className="single-car">
                {cars?.map(singleCar=> {

                    const itemInCart = cart.find(cartItem=>cartItem.id === singleCar.id)
                    
                    return (
                        <div className="card" key={singleCar.id}>
                            <div className="portrait">
                               <Link to={`/details/${singleCar.id}`}>
                               <img className="car-image" src={singleCar.image} alt="Car" height="400px"/>
                               </Link>
                            </div>
                            <div>
                                <p>Make: {singleCar.make}</p> 
                                <p>Model: {singleCar.model}</p>
                                <p>Year of Production: {singleCar.year_of_prod}</p>
                                <p>Price: Ksh. {singleCar.price}</p>
                            </div>
                                {itemInCart ? <AddRemoveFromCart id={singleCar.id}/>
                                    : <button className="addtoCartBtn button" onClick={()=>addingToCart(singleCar.id)}>Add to cart</button>
                                }
                        </div>
                        )                
                }
                    )}
            </div>
        </div>
    )

}

export default Products