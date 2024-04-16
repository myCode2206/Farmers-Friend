import "./sidebar.module.css"

import Weathercard from "../Weather/Weathercard"



function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
          <div className="bg-dark p-2">
            <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
              <i className="fs-5 "></i>
              <span className="fs-4 ms-3 d-none d-sm-inline">ECOGREEN</span>
            </a>
            <ul className="nav nav-pills np flex-column mt-4">
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-gauge"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">DashBoard</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-house"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Articles</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Products</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0 mask">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-clipboard"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-4 ms-3 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3 p3">
          <Weathercard/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;