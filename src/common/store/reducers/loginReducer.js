const initialState = {
    response : {},
    requestMade : false,
    userDetails : {},
    sessionIsActive : null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_LOGIN_FIELDS":{
            return{
                ...state,
                response : {...action.responseLogin},
                requestMade : action.requestMade
            };
        }

        case "CHECK_SESSION_ACTIVE":{
            let token = sessionStorage.getItem('loginToken');
            if(token){
                return{
                    ...state,
                    sessionIsActive : true
                }
            }
            return{
                ...state,
                sessionIsActive : false
            }
        }

        case "LOGOUT_SESSION":{
            sessionStorage.removeItem("loginToken");
            return{
                ...state,
                sessionIsActive : false
            }
        }

        default:{
            return state;
        }
    }
};

export default loginReducer;