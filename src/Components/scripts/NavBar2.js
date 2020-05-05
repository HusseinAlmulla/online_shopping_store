import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
      <a class="navbar-brand" href={"/"}>OZO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href={"/"}>
              Home 
              </a>
          </li>
          </ul>
          <ul class="navbar-nav ml-auto">
          <li className=" nav-item active">
            <a className="nav-link" href={"/"}>
              Login 
              </a>
          </li>
          <li className=" nav-item active">
            <a className="nav-link" href={"/"}>
              Register 
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar2;