import Axios from 'axios';

export const loginToApp = async (email,password) => {
    const url = 'http://localhost:8080/api/auth/signin';
    return await Axios.post(url, {
        "password": password,
        "username": email
      });
};


export const createSession =  (loginDetails) => {
  sessionStorage.setItem("loginToken", loginDetails.response.data.token);
}