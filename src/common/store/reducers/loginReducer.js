const initialState = {
    response : {},
    requestMade : false,
    userDetails : {}
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

        default:{
            return state;
        }
    }
};

export default loginReducer;