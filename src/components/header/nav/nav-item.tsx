import React from "react";
import { Link } from "react-router-dom";

interface Props {
  linkName: string;
}
const NavItem: React.FC<Props> = ({ linkName }) => {
  return (
    <li className="nav-list-item">
      <Link to="/">{linkName}</Link>
    </li>
  );
};

export default NavItem;
