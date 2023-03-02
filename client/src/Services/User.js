import axios from "axios";
import config from "../Config/config";

export const getUserSessionData = (accessToken) => {
  let api_url = `${config.apiHost}/auth/userSessionData`;
  return axios.get(api_url, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const getUserSessionDataV1 = (accessToken, userId) => {
  let api_url = `${config.apiHost}/auth/userSessionData`;
  return axios.post(
    api_url,
    { userId },
    {
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken,
      },
    }
  );
};

export const getLogin = (data) => {
  let api_url = `${config.apiHost}/auth/login`;
  let configOptions = {
    method: "post",
    url: api_url,
    responseType: "json",
    data: data,
  };
  return axios(configOptions);
};

export const getUserRegister = (data) => {
  let api_url = `${config.apiHost}/auth/register`;
  let configOptions = {
    method: "post",
    url: api_url,
    responseType: "json",
    data: data,
  };
  return axios(configOptions);
};

export const sendRequest = ({ path, method, payload }) => {
  let api_url = `${config.apiHost}${path}`;
  let configOptions = {
    method,
    url: api_url,
    responseType: "json",
    data: payload,
  };
  return axios(configOptions);
};

export const userChangePassword = (accessToken, data) => {
  let api_url = `${config.apiHost}/auth/changePassword`;
  return axios.post(api_url, data, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const userForgotPassword = (data) => {
  let api_url = `${config.apiHost}/auth/forgotPassword`;
  let configOptions = {
    method: "post",
    url: api_url,
    responseType: "json",
    data: data,
  };
  return axios(configOptions);
};

export const userUpdateProfile = (accessToken, data) => {
  let api_url = `${config.apiHost}/auth/updateProfile`;
  return axios.post(api_url, data, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const deleteProfile = async (accessToken) => {
  const api_url = `${config.apiHost}/auth/deleteProfile`;
  return axios.get(api_url, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken
    }
  });
};

export const getUserPlan = (accessToken) => {
  let api_url = `${config.apiHost}/auth/plan-list`;
  return axios.get(api_url, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const createSubscription = (accessToken, data) => {
  let api_url = `${config.apiHost}/plan/create-subscription`;
  return axios.post(api_url, data, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};

export const sendEmail = (accessToken, data) => {
  let api_url = `${config.apiHost}/public/send-email`;
  return axios.post(api_url, data, {
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken,
    },
  });
};
