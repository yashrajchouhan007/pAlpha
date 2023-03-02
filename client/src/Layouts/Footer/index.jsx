import React, { useState } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
// import Social from "./Social";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../../Assets/Images/new/logo.png";
import mobileIcon from "../../Assets/Images/new/Smartphone.png";
import EmailIcon from "../../Assets/Images/new/email-icon.png";
import { useLocation } from "react-router-dom";
import RequestDialog from "../../Pages/Home/dialog/RequestDialog";

const Footer = () => {
  const account = useSelector((state) => state.account);
  let location = useLocation();
  const [dialogOpen, setDialogOpen] = useState(false);

  const dt = new Date();
  if (account.isAuthenticated) {
    return (
      <footer className={`footer_main`}>
        <p className="footer_main-legal">
          Peacefully.com is not a law firm and does not perform the same
          services provided by a licensed attorney. Peacefully.com, its
          services, and its forms and templates are not a substitute for the
          advice or service of a licensed attorney. We recommend that you seek
          out a local attorney for any legal questions and/or analysis.
        </p>
        <p className="footer_main-security">
          Security: Our most important concern is the protection and reliability
          of customer data. To ensure this, our servers are protected by
          high-end firewall systems and scans are performed regularly to ensure
          that any vulnerabilities are quickly found and patched. We use
          technology with SOC II Type II Certification, ISO 27001, 27017, and
          27018 Certifications, HITRUST, and FedRAMP Authorization.
        </p>
      </footer>
    );
  }
  // console.log("Location", location.pathname);
  return (
    <>
      <footer
        className={`footer ${
          location.pathname === "/"
            ? "isHome"
            : location.pathname === "/terms-services" ||
              location.pathname === "/privacy-policy" ||
              location.pathname === "/employers/learn-more"
            ? "showFooter"
            : "isNotLoggedIn"
        }`}
      >
        <Container>
          <Row>
            <Col md={3}>
              <div className="footer_widgets">
                <div className="footer_logo">
                  <Link to="/">
                    <img src={footerLogo} alt="not found" />
                  </Link>
                </div>
                <ul className="list-styled-none footer_contact_info">
                  <li>
                    <img src={mobileIcon} alt="not found" />{" "}
                    <a href="tel: (657) 999-0791">(657) 999-0791</a>
                  </li>
                  <li>
                    <img src={EmailIcon} alt="not found" />{" "}
                    <a href="mailto: hello@peacefully.io">
                      hello@peacefully.io
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer_widgets">
                <Row>
                  <Col md={5}>
                    <h3>Company</h3>
                    <ul className="list-styled-none featured_link">
                      <li>
                        <a href="https://guide.peacefully.com/">Resources</a>
                      </li>
                      <li>
                        <a href="mailto:hello@peacefully.com">Contact</a>
                      </li>
                      <li>
                        <div
                          className="request-demo"
                          onClick={(e) => {
                            e.preventDefault();
                            setDialogOpen(true);
                          }}
                        >
                          Request a Demo
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col md={7}>
                    <h3>Further Information</h3>
                    <ul className="list-styled-none featured_link">
                      <li>
                        <Link to="/auth/signin">Login</Link>
                      </li>
                      <li>
                        <Link to="/terms-services">Terms of Use</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer_widgets">
                <h3>Follow us</h3>
                <ul className="d-flex list-styled-none social_media_footer">
                  <li>
                    <a
                      href="https://www.instagram.com/wearepeacefully"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        style={{
                          color: "#FB3958",
                        }}
                        className="fa fa-instagram"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/peacefullyio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/peacefully"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="copyright_txt">
                  <p>©Peacefully Inc. {dt.getFullYear()}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p className="footer_content">
                Peacefully.com is not a law firm and does not perform the same
                services provided by a licensed attorney. Peacefully.com, its
                services, and its forms and templates are not a substitute for
                the advice or service of a licensed attorney. We recommend that
                you seek out a local attorney for any legal questions and/or
                analysis.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      {dialogOpen && <RequestDialog dialogClose={() => setDialogOpen(false)} />}
    </>
  );
};
export default Footer;
