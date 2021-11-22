import React from 'react'
import SearchBar from '../mini components/SearchBar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const {cart} = useSelector(state => state.cart)

    return (
        
        <div className="header">
           <Link to="/"><i className="title">Pearl Shine Motors</i> </Link>
           <SearchBar/>
           <Link to="/cart"><button className="cart-btn">Cart({cart.length})</button></Link>
        </div>            
    
    )
}

export default Header
