import React from "react";

const AuthFooterInfo = ({
  buttonName,
  description,
  handleSelect,
  eventkey,
}) => {
  return (
    <div className="login_footer d-flex align-items-center justify-content-center">
      <p className="text-uppercase mb-0">{description}&nbsp;</p>
      <a
        className="text-uppercase button__element button__element--small"
        href="/#"
        onClick={(e) => handleSelect(e, eventkey)}
      >
        {buttonName}
      </a>
    </div>
  );
};

export default AuthFooterInfo;
