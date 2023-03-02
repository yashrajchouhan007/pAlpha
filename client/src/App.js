import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import WithAxios from "./Services/WithAxios";
import Router from "./Routes";
import Layout from "./Layouts";
import { encryptStorage } from "./Components/Helpers/commonMethods";
import { getSessionInfoStart } from "./Redux-Saga/Redux/account";

import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const App = () => {
  const account = useSelector((state) => state.account);
  const reduxDispatch = useDispatch();

  useEffect(
    () => {
      if (account.isAuthenticated) {
        encryptStorage.setItem("token", account.token);
        encryptStorage.setItem("user", account.user);
        reduxDispatch(getSessionInfoStart(account.token));
      }
    },
    // eslint-disable-next-line
    [account.isAuthenticated]
  );

  return (
    <WithAxios>
      <BrowserRouter>
        <ToastContainer icon={true} />
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </WithAxios>
  );
};

export default App;
