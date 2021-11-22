import React from "react";
import { Link } from "react-router-dom";



const Signup = ()=>{


    return (
        <div className="form">
            <div className="signup-form">
                <form>    
                    <p>Signup Form</p>                
                    <input type="text" placeholder="Enter Fullname" onChange={} required></input>
                    <input type="text" placeholder="Enter Username" required></input>
                    <input type="email" placeholder="Enter Email" required></input>
                    <input type="password" placeholder="Enter Password" required></input>
                    <input type="password" placeholder="Enter Confirm Password" required></input>
                    <button className="btn-submit" type="submit" value="Submit" >Submit</button>
                    <i>Already have an account? <Link to="/login">Log in</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
                </form>
            </div>
    
        </div>
    )

}


export default Signup;