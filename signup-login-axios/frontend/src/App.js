import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login"


const App = ()=> {
  return (
    <div className="App">
    <Home/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Home}/>
      <Route path="/register" element={Signup} />
      <Route path="invoices" element={Login} />
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
