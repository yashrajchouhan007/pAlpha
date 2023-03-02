import { createSlice } from "@reduxjs/toolkit";
import Amplify from "aws-amplify";
import { encryptStorage } from "../../Components/Helpers/commonMethods";

const initialState = {
  isLoading: false,
  isAuthenticated: encryptStorage.getItem("token") ? true : false,
  user: encryptStorage.getItem("user")
    ? JSON.parse(encryptStorage.getItem("user"))
    : null,
  token: encryptStorage.getItem("token"),
  sidebarToggle: true,
  sessionInfo: {},
  errorMessage: null,
};

const {
  actions: {
    cognitoRequest,
    loginStart,
    loginSuccess,
    loginFailure,
    getLogout,
    sidebarToggle,
    getSessionInfoStart,
    getSessionInfoSuccess,
    getSessionInfoFailure,
    udpateUserProfile,
  },
  reducer,
} = createSlice({
  name: "account",
  initialState,
  reducers: {
    cognitoRequest: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    loginStart: (state) => ({
      ...state,
      isLoading: true,
      errorMessage: null,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      isAuthenticated: true,
      token: action.payload.access_token,
      user: action.payload,
      errorMessage: null,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isLoading: false,
      token: null,
      user: null,
      isAuthenticated: false,
      errorMessage: action.payload,
    }),
    getLogout: (state) => {
      Amplify.Auth.signOut({ global: true });
      // encryptStorage.clear();
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
        errorMessage: null,
      };
    },
    sidebarToggle: (state, action) => ({
      ...state,
      sidebarToggle: action.payload,
    }),
    getSessionInfoStart: (state) => ({
      ...state,
      isLoading: true,
    }),
    getSessionInfoSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      sessionInfo: action.payload,
    }),
    udpateUserProfile: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    getSessionInfoFailure: (state) => ({
      ...state,
      isLoading: false,
      sessionInfo: {},
    }),
  },
});

export default reducer;
export {
  cognitoRequest,
  loginStart,
  loginSuccess,
  loginFailure,
  getLogout,
  sidebarToggle,
  getSessionInfoStart,
  getSessionInfoSuccess,
  getSessionInfoFailure,
  udpateUserProfile,
};
