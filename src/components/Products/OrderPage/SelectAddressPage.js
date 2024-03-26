import React, { useEffect } from "react";
import { FormControl, FormHelperText ,MenuItem, Select, Typography, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../../TimedMessageBox/MessageBox";
import { addNewAddressForUser, fetchSavedAddressesForUser } from "../../../common/services/orderServices";
import { useDispatch } from "react-redux";
import { setActiveAddress } from "../../../common/store/actions/orderActions";

const SelectAddressPage = ({ setStep }) => {
  const[addressValue, setAddressValue] = useState(""); //Select address component's value

  const[newAddressValues, setNewAddressValues] = useState({ //State for the new address filling form
    "city": "",
    "contactNumber": "",
    "landmark": "",
    "name": "",
    "state": "",
    "street": "",
    "user": "", //Field to be appended in service function 
    "zipcode": ""
  });

  const[allSavedAddresses, setAllSavedAddresses] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const StyledArrow = styled(KeyboardArrowDownIcon)({
    borderLeft: '1px solid gray', // Add left border to the icon
    paddingLeft: '8px', // Adjust padding for the icon
  });

  useEffect(()=>{
    fetchSavedAddressesForUser().then((response)=>{
      setAllSavedAddresses(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  });

  const handleAddNewAddress = () => {
    const contactNumberRegex = /^\d{8,15}$/;
    const zipcodeRegex = /^\d{4,12}$/;

    if(newAddressValues.name.length < 1 || newAddressValues.name.length > 70){
      alert('Name field length should be between 1-70 characters.');
      return; // Prevent form submission if name is invalid
    }

    if(!contactNumberRegex.test(newAddressValues.contactNumber)){
      alert('Please enter a valid contact number between 8-15 digits.');
      return;
    }

    if(newAddressValues.street.length < 1 || newAddressValues.street.length > 100){
      alert('Street field length should be between 1-100 characters.');
      return;
    }

    if(newAddressValues.city.length < 1 || newAddressValues.city.length > 100){
      alert('City field length should be between 1-100 characters.');
      return;
    }

    if(newAddressValues.state.length < 1 || newAddressValues.state.length > 100){
      alert('State field length should be between 1-100 characters.');
      return;
    }

    if(!zipcodeRegex.test(newAddressValues.zipcode)){
      alert('Please enter a valid zipcode between 4-12 digits');
      return;
    }

    //Service for adding new address for a user
    addNewAddressForUser(newAddressValues).then((response)=>{
      alert("Address added sucessfully");
    }).catch((error)=>{
      alert("Problem occured while adding new address");
    });

  };

  const handleNextStep = () => { //Function to take the user to Confirm Order Page(Step 3)
    // ... set address state in redux store here ...
    if(addressValue === ""){
      handleOpenBox();
      return;
    } 
    if(addressValue.length !== 0) setStep(2);
    else console.log('Please Select a address');
  }

  const handleReturnToItems = () => { //Function to return to Product Page
    navigate(`/products/${id}`);
  }

  const[messageBoxState, setShowMessage] = useState(false); //For message box on error

  const handleOpenBox = () => { //Needs to be created to switch the message box state to first show it and after an interval hide it
    setShowMessage(true);
    setTimeout(()=>{
      setShowMessage(false);
    }, 2000);
  }

  const handleChangeActiveAddress = (e) => {
    // console.log(e.target.value)
    const findAddressFromList = allSavedAddresses.find((address)=>(
      address.id === e.target.value
    ));
    setAddressValue(findAddressFromList);
  }

  useEffect(()=>{
    dispatch(setActiveAddress(addressValue));
  },[addressValue]);

  return (
    <>
      <FormControl sx={{width: 1/2, mt :  4}}>
        <FormHelperText sx={{ marginLeft: 0, color: "black" }}>
          Select Address
        </FormHelperText>
        <Select
          id="sort-value"
          size="small"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ color: "gray" }}>Select...</span>;
            } else {
                let objAddress = allSavedAddresses.find((item) => {
                   return item.id === selected
                 }); 
                 return <span>{`${objAddress.street}, ${objAddress.city}, ${objAddress.state}.`}</span>
            }
          }}
          displayEmpty
          IconComponent={StyledArrow}
          sx={{
            width: 9/10,
            "& .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the default icon
            },
            "&:hover .MuiSelect-icon": {
              transform: "none", // Reset the transformation of the icon on hover
            },
          }}
          value={
            (addressValue === "") ? "" : addressValue.id
          }
          onChange={handleChangeActiveAddress}
        >
          {
            (allSavedAddresses.length !== 0)
            ? allSavedAddresses.map((item, index)=>(
              <MenuItem key={index} value={item.id}>
                {`${item.street}, ${item.city}, ${item.state}.`}
              </MenuItem>
            ))
            :<MenuItem></MenuItem>
          }
        </Select>
      </FormControl>

      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'95vw'}>
          <Typography variant="subtitle1" sx={{ mt: 2 }}> --OR-- </Typography>
          <Typography variant="h6" sx={{ mt: 3}}> Add Address </Typography>
          <TextField sx={{ mt : 2, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, name : e.target.value})} value={newAddressValues.name} label="Name" variant="outlined" autoComplete='on' required/>
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, contactNumber : e.target.value})} value={newAddressValues.contactNumber} label="Contact Number" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, street : e.target.value})} value={newAddressValues.street} label="Street" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, city : e.target.value})} value={newAddressValues.city} label="City" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, state : e.target.value})} value={newAddressValues.state} label="State" variant="outlined" autoComplete='on' required/> 
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, landmark : e.target.value})} value={newAddressValues.landmark} label="Landmark" variant="outlined" autoComplete='on'/> 
          <TextField sx={{ mt : 1, width : '27vw' }} onChange={(e)=>setNewAddressValues({...newAddressValues, zipcode : e.target.value})} value={newAddressValues.zipcode} label="Zip Code" variant="outlined" autoComplete='on' required/>
          
          <Button variant="contained" onClick={handleAddNewAddress} sx={{backgroundColor : '#3f51b5', marginTop : 2, width : '27vw'}}> SAVE ADDRESS </Button>
          {/* Will Call API to add a new address */}

          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} width={'27vw'} margin={'4vh auto 5vh'}>
              <Button variant="text" onClick={handleReturnToItems} sx={{ width : 1/5, color : 'black', backgroundColor : '#EEEEEE'}}> BACK </Button>
              {/* Go Back to Product Page */}

              <Button variant="contained" onClick={handleNextStep} sx={{backgroundColor : '#3f51b5', width : 1/5, ml : 2}}> NEXT </Button>
              {/* Proceed to Confirm Order Page */}

              <MessageBox messageState={messageBoxState} message={'Please select address!'} bgcolor={'red'}/>
          </Stack>

      </Stack>   
    </>
  );
};

export default SelectAddressPage;
