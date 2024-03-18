import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import {Route, Routes, useLocation} from "react-router-dom";
import Signup from '../Signup/Signup';
import NavigationBar from '../Navbar/NavigationBar';
import Main from '../Products/Main';

function App() {
  // const allusers = useSelector(state => state.users);
  const location = useLocation();
  const [navparam, setNavParam] = useState();
  const [userRole, setUserRole] = useState("user");

  useEffect(()=>{
    if(location.pathname === "/login") setNavParam("login");
    else if(location.pathname === "/signup") setNavParam("signup");
    else{
      setNavParam("logged");
    }
  },[location.pathname]);

  return (
    <>
    <NavigationBar page={navparam} user={userRole}/>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/products' element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
