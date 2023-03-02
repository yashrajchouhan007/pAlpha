import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center">
      <h1>404 Error</h1>
      <h1>Page Not Found</h1>
      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
