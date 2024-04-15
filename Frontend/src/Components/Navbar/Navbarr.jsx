import { Link, useNavigate } from "react-router-dom";

const Navbarr = () => {
  const navigate = useNavigate();
  function clickListener() {
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Farmer
        </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active">About</a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={clickListener} className="btn btn-outline-success">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
