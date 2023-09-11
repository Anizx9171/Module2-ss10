import React from "react";
import { Link, NavLink } from "react-router-dom";

export const SiderBar = () => {
  return (
    <>
      <div className="m-menu">
        <Link to="/admin" className="m-logo-container">
          <img
            height={50}
            width={50}
            src="	https://pluspng.com/img-png/favicon-png-favicon-1024.png"
            alt=""
          />
          <span className="up"> Quản trị viên</span>
        </Link>
        <div className="m-menu-item">
          <div className="m-tooltip-content">
            <NavLink to="/admin" className="m-item-router">
              <i className="fa-solid fa-gauge m-icon-15-fs" />
              <div className="m-item-title">Tổng quan</div>
            </NavLink>
          </div>
          <div className="m-tooltip-content">
            <NavLink to="/admin/manager-user" className="m-item-router">
              <i className="fa-solid fa-user m-icon-15-fs" />
              <div className="m-item-title">Quản lý tài khoản</div>
            </NavLink>
          </div>
          <div className="m-tooltip-content">
            <NavLink to="/admin/manager-product" className="m-item-router">
              <i className="fa-solid fa-book m-icon-15-fs" />
              <div className="m-item-title">Quản lý sản phẩm</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
