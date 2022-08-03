import './App.css'
import React from "react";
import UserDetail from './componenet/UserDetail'
import DisplayUserDetail from './componenet/DisplayUserDetail'
import { useState } from 'react';


const App = (() => {

  const [userData, setUserData] = useState([])

  const userDetail = (username, userage) => {
    setUserData(previousData => {
      return ([{ Name: username, Age: userage, key: Math.round(Math.random() * 500) }, ...previousData]);
    })
  }


  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center'>
        <UserDetail userDetail={userDetail} />
      </div>
      <div className='row d-flex justify-content-center'>
        <DisplayUserDetail displayDetail={userData} />
      </div>
    </div>
  );
});

export default App;