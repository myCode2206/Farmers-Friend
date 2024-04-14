import React from "react";

const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Farmer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mx-auto d-flex justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <form
            className="d-flex justify-content-center"
            role="search"
            action="#"
          >
            <button className="btn btn-outline-success" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
