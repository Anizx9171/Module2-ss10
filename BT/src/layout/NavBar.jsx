import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const listCart = useSelector((e) => e.listcart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              {" "}
              Shopping{" "}
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lisproduct">
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item">
                {/* Icon */}
                <Link className="text-reset me-3 nav-link" to="/cart">
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "#000", fontSize: "1.2rem" }}
                  />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    {listCart.length}
                  </span>
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  Đăng ký
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Đăng nhập
                </Link>
              </li>
            </ul>
            {/* Avatar */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item">My profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Settings</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
  );
};
