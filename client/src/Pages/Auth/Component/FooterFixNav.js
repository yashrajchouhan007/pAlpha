import React from "react";
import { Link } from "react-router-dom";

const FooterFixNav = () => {
  return (
    <div className="footer_fix_nav">
      <ul>
        <li>©Peacefully Inc.</li>
        <li>
          <Link to="/terms-services">Terms of Use</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterFixNav;
