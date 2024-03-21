import { loginToApp } from "../../services/loginService"

export const addLoginDetails = (email,password) => dispatch => {
    loginToApp(email,password).then((response)=>{
        dispatch({
            type : "SET_LOGIN_FIELDS",
            responseLogin : response,
            requestMade : true
       }) 
    }).catch((response)=>{
        dispatch({
            type : "SET_LOGIN_FIELDS",
            responseLogin : response,
            requestMade : true
       }) 
    })
};
