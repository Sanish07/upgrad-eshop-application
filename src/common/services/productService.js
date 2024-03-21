import Axios from "axios";

export const fetchCategoriesFromAPI = async () => {
    const url = 'http://localhost:8080/api/products/categories';
    return await Axios.get(url);
}