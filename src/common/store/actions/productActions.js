import { fetchCategoriesFromAPI, fetchProductsFromAPI } from "../../services/productService";

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

export const renderProducts = () => dispatch =>{
    fetchProductsFromAPI().then((response)=>{
        dispatch({
            type : "INIT_PRODUCTS",
            responseProductService : response
        })
    }).catch((response)=>{
        dispatch({
            type : "INIT_PRODUCTS",
            responseProductService : response
        })
    })
}