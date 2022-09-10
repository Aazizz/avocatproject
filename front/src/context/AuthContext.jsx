import React from "react";
import { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";
export const AuthContext = createContext();
// this component is going to stock the state logged in
export function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInresponse = await axios.get("/loggedIn");
    setLoggedIn(loggedInresponse.data);
    console.log(loggedInresponse.data);
  };
  useEffect(() => {
    getLoggedIn();
  },[]);
  return (
    <>
      <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}


