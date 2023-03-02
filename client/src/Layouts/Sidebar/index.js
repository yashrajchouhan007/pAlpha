import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AlignLeft } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { sidebarToggle, getLogout } from "../../Redux-Saga/Redux/account";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Grid as GridIcon,
  HelpCircle as HelpIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
} from "react-feather";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

const Sidebar = (props) => {
  const { sessionInfo } = useSelector((state) => state.account);
  const location = useLocation();
  const {
    currentUser: { qualtrics_user_id: qualtricsUserId } = {},
    assignUserList,
    myDeputies,
  } = sessionInfo;
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(sidebarToggle(toggle));
    // eslint-disable-next-line
  }, [toggle]);

  return (
    <>
      <div className={`sidebar_parent`} onClick={() => handleToggleSidebar()}>
        <AlignLeft size={30} color="#ffffff" />
      </div>
      <div
        className={`sidenav ${toggle ? "sidebar_toggle" : ""} `}
        id="qualtric-sidebar"
      >
        <ProSidebar
          toggled={toggle}
          // handleToggleSidebar={() => handleToggleSidebar()}
        >
          <Menu iconShape="square">
            <MenuItem>
              <NavLink
                to="/stagingtool"
                className={location.pathname === "/stagingtool" ? "active" : ""}
              >
                <GridIcon /> My Dashboard
              </NavLink>
            </MenuItem>

            {/* <SubMenu title={`Shared with me`} icon={<ShareIcon />}>
              <MenuItem>
                <NavLink
                  to={`/stagingtool?d=anil.be.php@gmail.com`}
                  className=""
                >
                  Anil Sharma
                </NavLink>
              </MenuItem>
            </SubMenu> */}

            {qualtricsUserId && assignUserList?.length && (
              <SubMenu title="Shared with me">
                {assignUserList.map((deputy) => (
                  <MenuItem>
                    <NavLink
                      to={`/stagingtool?d=${deputy.email}`}
                      className={`${location.pathname}${location.search}` === `/stagingtool?d=${deputy.email}` ? "active" : ""}
                    >
                      {deputy.first_name} {deputy.last_name}
                    </NavLink>
                  </MenuItem>
                ))}
              </SubMenu>
            )}

            {myDeputies?.length > 0 && (
              <MenuItem>
                <NavLink
                  to="/my-deputies"
                  className={location.pathname === "/my-deputies" ? "active" : ""}
                >
                  Manage access
                </NavLink>
              </MenuItem>
            )}
            <MenuItem>
              <NavLink
                to="/help"
                className={location.pathname === "/help" ? "active" : ""}
              >
                <HelpIcon /> Get help
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/my-account"
                className={location.pathname === "/my-account" ? "active" : ""}
              >
                <UserIcon /> My Account
              </NavLink>
            </MenuItem>
            <MenuItem onClick={() => dispatch(getLogout())}>
              <NavLink to="/#">
                <LogOutIcon /> Sign Out
              </NavLink>
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
