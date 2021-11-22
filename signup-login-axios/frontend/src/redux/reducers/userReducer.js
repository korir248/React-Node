import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../types";

const initialState = {

}

const userReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:
            
            console.log("Login successful!");
            return {

            }
        case LOGIN_FAIL:
            console.log("Login failed!");
            return {

            }
        case SIGNUP_SUCCESS:
            console.log("Signup succesful!");
            return {

            }
        case SIGNUP_FAIL:
            console.log("Signup failed!");
            return {

            }
        default:
            break;
    }
}

export default userReducer