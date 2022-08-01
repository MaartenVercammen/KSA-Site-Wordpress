import React, { useState, useEffect } from "react";
import NavItem from "./nav-item";
import NavLogo from './nav-logo';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLogo/>
      <ul className="nav-list">
          <NavItem linkName="News" />
          <NavItem linkName="Braggel" />
          <NavItem linkName="Leeftijden" />
          <NavItem linkName="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
