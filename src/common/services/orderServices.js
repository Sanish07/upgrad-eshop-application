import Axios from 'axios';

export const addNewAddressForUser = async (addressDetails) => { //Service for adding new address
    const userID = JSON.parse(sessionStorage.getItem('loginData')).id;
    const url = '/api/addresses';
    const loginToken = sessionStorage.getItem('loginToken');
    let addressData = {...addressDetails};
    
    if(userID){
       addressData = {...addressData, user : userID};
    }
    
    // console.log(addressData);
      
    const userInfo = {
           headers: {
             'x-auth-token': `${loginToken}`,
             'Content-Type': 'application/json',
           },
    };

    // console.log(userInfo);
    return await Axios.post(url, addressData,userInfo);
};

export const fetchSavedAddressesForUser = async () => { //Service to fetch saved addresses from database
    const url = '/api/addresses';
    const loginToken = sessionStorage.getItem('loginToken');

    const userInfo = {
          'x-auth-token': `${loginToken}`,
          'Content-Type': 'application/json',
    };

    return await Axios.get(url, {
        headers: userInfo,
    });
}

export const placeProductOrder = async (productInfo, addressInfo) =>{
    const url = '/api/orders';
    const loginToken = sessionStorage.getItem('loginToken');
    const userID = JSON.parse(sessionStorage.getItem('loginData')).id;

    const userInfo = {
        headers: {
          'x-auth-token': `${loginToken}`,
          'Content-Type': 'application/json',
        },
    };

    const orderData = {
        "address": addressInfo.id,
        "product": productInfo.productDetails.id,
        "quantity": productInfo.productQty,
        "user": userID
    }

    return await Axios.post(url,orderData,userInfo);
}