import React from "react";
import FacebookIcon from "../../../Assets/Images/facebook_new.png";
import LinkedinIcon from "../../../Assets/Images/linkedin_new.png";
import Instagram from "../../../Assets/Images/instagram.png";

const SocialMedia = (props) => {
  return (
    <div className="social_media">
      <ul className="d-flex justify-content-center">
        <li>
          <a
            href="https://instagram.com/peacefullyio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="not found" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/peacefullyio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="not found" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/peacefully"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="not found" target="_balnk" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
