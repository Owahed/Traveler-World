import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            Traveler World
              <i className="fas fa-umbrella-beach nav-logo-fa"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/tvShow"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blogs"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/admin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                 Admin
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Log in
                </NavLink>
              </li> */}
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
};

export default NavBar;