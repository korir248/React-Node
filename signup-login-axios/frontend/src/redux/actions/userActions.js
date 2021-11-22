import { LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS} from '../types'

export const createUser = (user)=>{
    return {
        type: LOGIN_SUCCESS,
        payload : user
    }
}