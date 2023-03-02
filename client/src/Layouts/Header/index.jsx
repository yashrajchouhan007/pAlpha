import React, { useEffect, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import initials from "initials";
import { useNavigate } from "react-router-dom";
import { LogOut, User as UserIcon } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../Redux-Saga/Redux/account";
import HeaderLogo from "../../Assets/Images/new/logo.png";

import "./header.css";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const [expanded, setExpanded] = useState(false);
  const fname = (account && account?.user?.first_name) || "";
  const lname = (account && account?.user?.last_name) || "";
  const name = `${fname} ${lname}`.toUpperCase();
  const location = useLocation();
  // console.info("props", location.pathname, account);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const LinkSignUp = () => {
    setExpanded(false);
    navigate("/auth/signup");
  };

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header_main");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <header
      className={`${
        location.pathname === "/"
          ? "header_main isTransparent"
          : "header_main default_header"
      } ${account.isAuthenticated ? "header_fixed login_header" : ""}`}
    >
      <div className="sign_out_btn_header desktop_hide">
        <Dropdown>
          <Dropdown.Toggle className="header_dropdown">
            <span className="user_sort_name  mint">{initials(name)}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="header_dropdown_item">
            <Dropdown.Item href="#" onClick={() => dispatch(getLogout)}>
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Navbar className="headerClass" expand={"lg"} expanded={expanded}>
        <Link to="/" className="brand" onClick={() => setExpanded(false)}>
          <h1>
            <img src={HeaderLogo} alt="not found" />
          </h1>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-right"
        >
          {account.isAuthenticated ? (
            <Nav className="ml-auto header_nav">
              <Link to="/employers/learn-more" className="nav-link">
                Employers
              </Link>

              <a
                className="nav-link"
                href="mailto:hello@peacefully.com"
                target=""
              >
                Contact Us
              </a>

              <div>
                <div className="user_details">
                  <p className="user_name">
                    {account && account.user.first_name}&nbsp;
                    {account && account.user.last_name}
                  </p>
                </div>
                <div className="sign_out_btn_header">
                  <Dropdown align="end">
                    <Dropdown.Toggle className="header_dropdown">
                      <span className="user_sort_name  mint">
                        {initials(name)}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="header_dropdown_item">
                      <Link
                        to="/my-account"
                        className={`dropdown-item ${
                          location.pathname === "/my-account" ? "active" : ""
                        }`}
                      >
                        <UserIcon /> My Account
                      </Link>
                      <Dropdown.Item
                        href="#"
                        onClick={() => dispatch(getLogout())}
                      >
                        <LogOut /> Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Nav>
          ) : (
            <Nav
              className="ml-auto header_nav"
              onSelect={() => setExpanded(false)}
            >
              <Link to="/employers/learn-more" className="nav-link">
                Employers
              </Link>
              <a className="nav-link" href="https://guide.peacefully.com">
                Resources
              </a>
              <a
                className="nav-link"
                href="mailto:hello@peacefully.com"
                target=""
              >
                Contact Us
              </a>
              <Link
                className="nav-link"
                to={`/auth/signin`}
                onClick={() => setExpanded(false)}
              >
                Login
              </Link>
              <button className="buttom_header" onClick={LinkSignUp}>
                Get Started
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
