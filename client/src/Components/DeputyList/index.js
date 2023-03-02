import React, { useEffect, useState } from "react";


const DeputyList = ({myDeputies,rejectedStatus, rejected, rejectCB }) => {


  return (
    <div className="table_section">
    <table className="deputyRequest-tbl table table-bordered">
    <thead>
      <th>S.No</th>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Action</th>
    </thead>
    <tbody>
      {myDeputies.map(
        (myDeputy) => (
          <tr>
            <td>1.</td>
            <td style={{ textTransform: "capitalize" }}>
              {myDeputy.firstName}{" "}
              {myDeputy.lastName}
            </td>
            <td>{myDeputy.email}</td>
            <td style={{ textTransform: "capitalize" }}>
              {rejectedStatus ? rejectedStatus : myDeputy.isAccess}
            </td>
            <td>
              {myDeputy.isAccess == "Requested" && !rejectedStatus ? (
                <p>
                  {!rejected ? (
                    <button
                      className="btn btn-reject"
                      onClick={() => rejectCB(    
                        myDeputy.id
                      )}
                    >
                      Reject
                    </button>
                  ) : (
                    ""
                  )}
                </p>
              ) : (
                ""
              )}
            </td>
          </tr>
        )
      )}
    </tbody>
  </table>
  </div>
  );
};

export default DeputyList;
