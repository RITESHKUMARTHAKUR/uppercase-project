import React  from 'react';
import { Route, Routes  } from 'react-router-dom';
import Home from "./HomeComponents/Home";
import Signup from "./Signup";
import Login from "./Login";


function Main() {
  return (
  <React.Fragment>
    {/* <AuthProvider> */}
      <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/signup"  element={<Signup/>} />
          <Route exact path="/login"  element={<Login/>} />
      </Routes>
    {/* </AuthProvider> */}
  </React.Fragment>
  )
}

export default Main