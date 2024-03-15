import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const allusers = useSelector(state => state.users);
  return (
    <>
     <h1> React app is running!</h1>
     {
      console.log(allusers)
      }
      {
      allusers.users.map(user => <>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      </>)
     }
    </>
  );
}

export default App;
