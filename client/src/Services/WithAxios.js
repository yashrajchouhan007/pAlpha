import { useMemo } from "react";
import axios from "axios";
import { getLogout } from "../Redux-Saga/Redux/account";
import { useDispatch, useSelector } from "react-redux";

const WithAxios = ({ children }) => {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch();
  useMemo(
    () => {
      axios.interceptors.response.use(
        (response) => {
          if (response.data.status === 200) {
            return response;
          } else {
            const response1 = Object.assign({}, response);
            dispatch(getLogout());
            return Promise.reject(response1);
          }
        },
        (error) => {
          let errorObj = Object.assign({}, error);
          if (
            Object.keys(errorObj).length === 0 ||
            errorObj.response.status === 401
          ) {
            dispatch(getLogout());
            return Promise.reject(errorObj);
          }
          if (errorObj.response.status === 500) {
            errorObj = {
              response: {
                data: {
                  message: "Something went Wrong! Unable to process Request.",
                },
              },
            };
            return Promise.reject(errorObj);
          }
          return Promise.reject(errorObj);
        }
      );
    },
    // eslint-disable-next-line
    [account.isAuthenticated]
  );

  return children;
};

export default WithAxios;
