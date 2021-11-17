import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import { useParams } from 'react-router';
import AddRemoveFromCart from './mini components/AddRemoveFromCart';

const Search = ()=> {
    const {search,cart} = useSelector(state => state.cart)
    const {params} =useParams();
    console.log(params);
    console.log(search);
    const dispatch = useDispatch()
    
    
    const addingToCart=(id)=>{

        console.log("Adding to Cart...")
         dispatch(addToCart(id))
         
    }

    return (
        <div className="container">
            <p className="section-title">Showing {search.length} {search.length === 1? "result" : "results"} for: {params} </p>
        <div className="single-car">
        {search.map(searchItem=>{

        const itemInCart = cart.find(cartItem=>cartItem.id === searchItem.id)
        
        return (
            <div className="card" key={searchItem.id}>
            
                <div className="portrait-search">
                <Link to={`/details/${searchItem.id}`}>
                    <img className="car-image" src={searchItem.image} alt="Car" height="400px"/>
                </Link>
                </div>
                <div>
                    <p>Make: {searchItem.make}</p> 
                    <p>Model: {searchItem.model}</p>
                    <p>Mileage: {searchItem.mileage}</p>
                    <p>Year of Production: {searchItem.year_of_prod}</p>
                    <p>Price: Ksh. {searchItem.price}</p>
                </div>
                {itemInCart ? <AddRemoveFromCart id={searchItem.id}/>
                                        : <button className="addtoCartBtn button" onClick={()=>addingToCart(searchItem.id)}>Add to cart</button>
                                    }
                </div>)
        })}
            </div>
        </div>
    )
}

export default Search