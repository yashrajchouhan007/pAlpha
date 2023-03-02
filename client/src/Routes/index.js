import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "../Config/config";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import Reset from "../Pages/Auth/Reset";
import PageNotFound from "../Pages/PageNotFound";
import Protected from "../Components/Protected";
import Dashbaord from "../Pages/Dashboard";
import Help from "../Pages/Help";
import MyAccount from "../Pages/MyAccount";
import Plan from "../Pages/Plan";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsServices from "../Pages/TermsServices";
import Employers from "../Pages/Home/Employers";
import DeputyList from "../Pages/DeputyList";
import SignUp from "../Pages/Auth/SignUpNew";
import { useSelector } from "react-redux";

const Router = () => {
  const account = useSelector((state) => state.account);

  useEffect(() => {
    Amplify.configure({ Auth: config.aws });
  }, []);

  return (
    <div className={`App ${account.sidebarToggle ? "toggle_sidebar" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/employers/learn-more" element={<Employers />} />
        <Route path="/terms-services" element={<TermsServices />} />
        <Route
          path="/auth/signin"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              auth={true}
              redirect={"/stagingtool"}
            >
              <Auth />
            </Protected>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              auth={true}
              redirect={"/stagingtool"}
            >
              <SignUp />
            </Protected>
          }
        />
        <Route
          path="/auth/reset"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              auth={true}
              redirect={"/stagingtool"}
            >
              <Reset />
            </Protected>
          }
        />
        <Route
          path="/stagingtool"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              redirect={"/stagingtool"}
            >
              <Dashbaord />
            </Protected>
          }
        />
        <Route
          path="/my-deputies"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              redirect={"/stagingtool"}
            >
              <DeputyList />
            </Protected>
          }
        />
        <Route
          path="/help"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              redirect={"/stagingtool"}
            >
              <Help />
            </Protected>
          }
        />
        <Route
          path="/my-account"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              redirect={"/stagingtool"}
            >
              <MyAccount />
            </Protected>
          }
        />
        <Route
          path="/plan"
          element={
            <Protected
              isAllowed={account.isAuthenticated}
              redirect={"/stagingtool"}
            >
              <Plan />
            </Protected>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
