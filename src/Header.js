import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">{/* Time icon */}</div>
      <div className="header__search">
        <AccessTimeIcon style={{ color: "#f9f7f9" }} />
        <div className="header__search__input__div">
          <input
            type="text"
            placeholder="Search Roopaks"
            className="header__search__input"
          />
          <SearchIcon style={{ color: "#f9f7f9" }} />
        </div>
        <HelpOutlineOutlinedIcon style={{ color: "#f9f7f9" }} />
        {/* search input */}
        {/* search icon */}
      </div>
      <div className="header__right">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
    </div>
  );
}

export default Header;
