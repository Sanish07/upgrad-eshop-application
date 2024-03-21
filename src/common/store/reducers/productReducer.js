const initialState = {
    responseCategories : []
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "INIT_CATEGORIES":{
            return {
                ...state,
                responseCategories : {...action.responseCatService}
            }
        }

        default:{
            return state;
        }
    }
}

export default productReducer;