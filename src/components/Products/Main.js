import React, { useEffect, useState } from "react";
import CategoriesToggle from "./CategoriesToggle";
import DisplayCard from "./DisplayCard";
import ProductSort from "./ProductSort";
import { useLocation, useNavigate } from "react-router-dom";
import MessageBox from "../TimedMessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginSessionIsActive } from "../../common/store/actions/loginActions";

const Main = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkLoggedIn = useSelector(state => state.loginStore);

    const[messageBoxState, setShowMessage] = useState(false);
    const[messageDetails, setMessageDetails] = useState({
      messageText : '',
      messageColor : ''
    });

    useEffect(()=>{
      dispatch(checkLoginSessionIsActive());
    },[dispatch]);

    useEffect(()=>{
      if(checkLoggedIn.sessionIsActive === false){
        navigate('/login');
      }
    },[checkLoggedIn.sessionIsActive]);

    const handleOpenBox = () => { //Needs to be created to switch the message box state to first show it and after an interval hide it
        setShowMessage(true);
        setTimeout(()=>{
          setShowMessage(false);
        }, 2000);
    }

    useEffect(()=>{
      // ..step1..
      //Checking the redirect from order confirmation page is step 2, step 1 is checking the login status
      console.log(location.state);
      if(location.state){
        setMessageDetails({...messageDetails, messageText : location.state.message, messageColor : location.state.color});
        handleOpenBox();
      }
    },[location.state]);

    return(
        <>
          <CategoriesToggle/>
          <ProductSort/>
          <DisplayCard/>
          <MessageBox messageState={messageBoxState} message={messageDetails.messageText} bgcolor={messageDetails.messageColor}/>
        </>
    )
}

export default Main;