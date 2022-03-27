import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src="/images/logo.png" className="header__logo" alt="" />
      <IconButton>
        <MessageIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
