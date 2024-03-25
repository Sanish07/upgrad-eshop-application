import Axios from 'axios';

export const addNewAddressForUser = async (addressDetails) => {
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

export const fetchSavedAddressesForUser = async () => {
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