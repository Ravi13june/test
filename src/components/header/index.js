import React, { useState } from "react";
import { RiDashboardFill, RiGlobalLine } from "react-icons/ri";
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i>
            <RiDashboardFill />
          </i>
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                target="_blank"
              >
                Covid-19
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <RiGlobalLine />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/state-wise">
                  India
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
