const initialState = {
    responseCategories : [],
    responseProducts : []
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "INIT_CATEGORIES":{
            return {
                ...state,
                responseCategories : {...action.responseCatService}
            }
        }

        case "INIT_PRODUCTS":{
            return {
                ...state,
                responseProducts : {...action.responseProductService}
            }
        }

        default:{
            return state;
        }
    }
}

export default productReducer;