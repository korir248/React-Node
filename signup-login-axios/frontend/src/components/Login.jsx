<<<<<<< HEAD
import React,{ uDispa} from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../redux/actions/userActions'

const Login = ()=> {

    const dispatch = useDispatch()

    const loginUser = (user)=>{
        dispatch(createUser(user))
    }
=======
import React from 'react'
import { Link } from 'react-router-dom'

const Login = ()=> {
>>>>>>> a286842160dbc8b032ccd812d15093efa17d51c7
    
    return (
        <div>
        <p>Login Page</p>
        <div className="login-form">
            <label for="uname">Username</label>
            <input type="text" placeholder="Enter Username" required/>

            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" required/>

<<<<<<< HEAD
            <button className="btn-submit" type="submit" onSubmit={()=> loginUser()}>Login</button>
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
=======
            <button className="btn-submit" type="submit">Login</button>
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i>
>>>>>>> a286842160dbc8b032ccd812d15093efa17d51c7
        </div>
    </div>
  
    )
}

export default Login

