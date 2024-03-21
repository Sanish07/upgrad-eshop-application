import { fetchCategoriesFromAPI } from "../../services/productService";

export const renderCategories = () => dispatch => {
    fetchCategoriesFromAPI().then((response)=>{
        dispatch({
            type : "INIT_CATEGORIES",
            responseCatService : response
       }) 
    }).catch((response)=>{
        dispatch({
            type : "INIT_CATEGORIES",
            responseCatService : response
       }) 
    });
};