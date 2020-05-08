import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-custom">

      <Link className="logo" to='/'>
        LOGO
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className=" nav-item active">
            <Link className="link" to="/">
              Login
            </Link>
          </li>
          <li className=" nav-item active">
            <Link className="link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar2;