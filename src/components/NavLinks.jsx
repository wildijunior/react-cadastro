import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
      <ul className="nav">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/contato">
            Contato
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/sobre">
            Sobre
          </NavLink>
        </li>
      </ul>
  );
};

export default NavLinks;
