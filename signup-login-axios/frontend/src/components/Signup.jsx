import React from "react";



const Signup = ()=>{


    return (
        <div className="form">
            <div className="signup-form">
                <form>    
                    <p>Signup Form</p>                
                    <input type="text" placeholder="Fullname" required></input>
                    <input type="text" placeholder="Email" required></input>
                    <input type="email" placeholder="Email" required></input>
                    <input type="password" placeholder="Password" required></input>
                    <input type="password" placeholder="Confirm Password" required></input>
                    <button className="btn-submit" type="submit" value="Submit" >Submit</button>
                </form>
            </div>
    
        </div>
    )

}


export default Signup;