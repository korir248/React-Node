import React from 'react'
import { Link } from 'react-router-dom'

const Login = ()=> {
    
    return (
        <div>
        <p>Login Page</p>
        <div className="login-form">
            <label for="uname">Username</label>
            <input type="text" placeholder="Enter Username" required/>

            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" required/>

            <button className="btn-submit" type="submit">Login</button>
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i>
        </div>
    </div>
  
    )
}

export default Login

