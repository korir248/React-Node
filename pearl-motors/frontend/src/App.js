import './App.css';
import Header from './components/header/Header';
import Products from './components/homepage/Products';
import Carousel from './components/homepage/Carousel';
import Cart from './components/cart/Cart';
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import CarDetails from './components/CarDetails';
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
    <BrowserRouter>    
      <Route path="/" exact>
        <Header/>
        <Carousel/>
        <Products/>
      </Route>    
      <Route path="/cart">
        <Header/>
        <Cart/>
      </Route>
      <Route path="/details/:id">
        <Header/>
        <CarDetails/>
      </Route>
      <Route path="/search" exact>
        <Redirect to="/"/>  
        
      </Route>
      <Route path="/search/:params">
        <Header/>
        <Search/>
      </Route>
      
      </BrowserRouter>    
    
    

    
    </div>
  );
}

export default App;
