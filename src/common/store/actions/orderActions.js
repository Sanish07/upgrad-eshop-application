export const setActiveAddress = (addressDetails) => { //To save selected address to redux store for order placing purpose.
    return{
        type : "SET_ACTIVE_ADDRESS",
        addressDetails
    }
};