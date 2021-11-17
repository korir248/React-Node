import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, SEARCH_BY_MAKE_MODEL_YEAR, INCREASE_QUANTITY, REDUCE_QUANTITY } from "../types";
import { myCars } from "../../components/car data/Cars";

const initialState = {
    cart:[],
    cars: myCars,
    search : []
} 

const cartReducer = (state= initialState,{type,payload})=>{
    switch (type) {
        case ADD_TO_CART:
            const specificCar = state.cars.find(car=>car.id===payload)

            const itemInCart = state.cart.find(cartItem=>cartItem.id === specificCar.id)
            console.log(specificCar)
            if(itemInCart){
                return {
                    ...state
                }
                    
            }else{
                return {
                    ...state, 
                    cart: [...state.cart, specificCar ]
                }
            }
        case SEARCH_BY_MAKE_MODEL_YEAR:
            let searchInput =payload.toLowerCase();            
            let filteredCars = state.cars.filter(car => car.make.toLowerCase().includes(searchInput) 
                                                    || car.model.toLowerCase().includes(searchInput) 
                                                    || car.year_of_prod.toLowerCase().includes(searchInput));            

            return {
                ...state,
                search: filteredCars
            }                   
        case REMOVE_FROM_CART:
            console.log(`Removing item ${payload} from cart`);
                        
            return {
                ...state,
                cart: [...state.cart.filter((item)=>item.id!==payload)]
                
            }
        case EMPTY_CART:
            console.log("Emptying cart...");
            return {
                ...state,
                cart: []
                    
            }
        case INCREASE_QUANTITY:
            console.log("Increasing quantity")
            return {
                ...state,
                cart: [...state.cart.map(cartItem =>
                    cartItem.id === payload ?
                    {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem

                )]
            }
        case REDUCE_QUANTITY:
            console.log("Reducing quantity")
            const newCart = []
            for (let i = 0; i < state.cart.length; i++) {
                let currentItem = state.cart[i]

                if (currentItem.id == payload) {
                    if(currentItem.quantity > 1 ){
                        currentItem.quantity -=1
                        newCart.push(currentItem)                    

                    }
                    
                }
                else{
                    newCart.push(currentItem)
                }
                
            }
            
            return {
                ...state,
                cart: newCart

                // cart: [...state.cart.map(cartItem =>
                //     {if(cartItem.id === payload){
                //         if (cartItem.quantity < 2) {
                //             return {
                //                 ...state,
                //                 cart: [...state.cart.filter((item)=>item.id!==payload)]
                //             }                            
                            
                //         } else {
                //             return {...cartItem, quantity: cartItem.quantity > 1 && cartItem.quantity - 1 }                           
                            
                //         }
                         

                //     }else return cartItem })]
            }
            
        
        default:
            return state;
    }
}

export default cartReducer
