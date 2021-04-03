import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <Link className="navbar-brand " to="/">
          <h3 className="mb-0 shadow" style={{ fontWeight: 700 }}>
            <img
              src="/logo1.png"
              width="35"
              height="35"
              style={{ borderRadius: 50 }}
              className="d-inline-block align-top mr-3"
              alt=""
            />
            Notify <span className="text-light" style={{fontSize: 18, fontWeight: 500}}>Shot Name</span>
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/notice">
                Notice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/section">
                Section
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
