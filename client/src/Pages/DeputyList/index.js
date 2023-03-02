import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Table } from "react-bootstrap";
import { sendRequest } from "../../Services/User";
import { toast } from "react-toastify";
import { getSessionInfoStart } from "../../Redux-Saga/Redux/account";

import "./deputyList.css";

const DeputyList = () => {
  const account = useSelector((state) => state.account);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { sessionInfo: { myDeputies = [], currentUser: { id: userId } = {} } = {} } = account;

  // reject request
  const rejectRequest = async (deputyId, ownerId = null) => {
    let data = {
      owner_id: ownerId || userId,
      deputy_id: deputyId,
    };
    setIsLoading(true);
    sendRequest({
      path: "/auth/hrAccessRequestReject",
      method: "post",
      payload: data,
    })
      .then((response) => {
        setIsLoading(false);
        console.log("response", response);
        dispatch(getSessionInfoStart(account.token));
      })
      .catch((error) => {
        setIsLoading(false);
        const {
          response: { data },
        } = error;
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(
    () => dispatch(getSessionInfoStart(account.token)),
    // eslint-disable-next-line
    []
  )

  return (
    <div className="table_section p-4">
      <div className="promoHeader mb-2">
        <h2>Deputy Request</h2>
      </div>
      <div className="deputyRequest_parent">
        <Table bordered={true} responsive className="deputyRequest-tbl">
          <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th
              style={{
                width: "120px",
              }}
            >
              Action
            </th>
          </thead>
          <tbody>
            {myDeputies.map((myDeputy, index) => (
              <tr key={myDeputy.id}>
                <td>{index + 1}.</td>
                <td style={{ textTransform: "capitalize" }}>
                  {myDeputy.first_name} {myDeputy.last_name}
                </td>
                <td>{myDeputy.email}</td>
                <td style={{ textTransform: "capitalize" }}>
                  {myDeputy.is_access}
                </td>
                <td>
                  {myDeputy.is_access === "Requested" ? (
                    <button
                      className="yellow-theme-btn button__element_button button__element--full w-25"
                      onClick={() => rejectRequest(myDeputy.id)}
                    >
                      Reject &nbsp;{" "}
                      {isLoading && (
                        <Spinner
                          animation="border"
                          variant="warning"
                          size="sm"
                        />
                      )}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DeputyList;
