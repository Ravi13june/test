import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

const currentTabClass = (history, path) => {
  if (history.location.pathname === path) {
    return "nav-link text-dark ";
  } else {
    return "nav-link";
  }
};

const Sidebar = (history) => {
   useHistory();

  function navLink(slug, name, icon) {
    return (
      <li className="nav-item">
        <Link className={currentTabClass(history, slug)} to={slug}>
          {name}  {icon}
        </Link>
      </li>
    );
  }

  return (
    <ul className="nav flex-column border-0 p-0 ">
      {navLink(
        "/",
        "",
        <i  />
      )}
      {navLink(
        "/",
        "",
        <i />
      )}

      {navLink(
        "/",
        "",
        <i />
      )}

      {navLink(
        "/",
        "",
        <i />
      )}

      {navLink(
        "/",
        "",
        <i />
      )}

      {navLink(
        "/",
        "Menu",
        <i />
      )}
     
    </ul>
  );
};

export default withRouter(Sidebar);
