import React, { useState } from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Fomat } from "../common/Fomat";
import {
  cartDeletePr,
  cartDownQuantity,
  cartUpQuantity,
} from "../action/cartAction";
import { notification } from "antd";

export const Cart = () => {
  let sum = 0;
  const dispatch = useDispatch();
  const listCart = useSelector((cart) => cart.listcart);
  const handleUpQuantity = (product) => {
    dispatch(cartUpQuantity(product));
  };
  const handleDownQuantity = (product) => {
    dispatch(cartDownQuantity(product));
  };
  const handelDelete = (product) => {
    dispatch(cartDeletePr(product));
    notification.error({
      message: "Xóa sản phẩm thành công",
      description: `sản phẩm ${product.product_name} đã được xóa`,
      duration: 1.5,
    });
  };
  return (
    <>
      <NavBar />
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {listCart.map((e) => {
                sum += e.quantity * e.price;
                return (
                  <div className="card rounded-3 mb-4" key={e.product_id}>
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={e.image}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">
                            {e.product_name}
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleDownQuantity(e)}
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <span style={{ marginTop: "0.3rem", fontSize: 18 }}>
                            {" " + e.quantity + " "}
                          </span>
                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleUpQuantity(e)}
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">
                            {Fomat(e.price * e.quantity)}
                          </h5>
                        </div>
                        <div
                          className="col-md-1 col-lg-1 col-xl-1 text-end"
                          onClick={() => handelDelete(e)}
                        >
                          <a href="#!" className="text-danger">
                            <i className="fas fa-trash fa-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="form1">
                      Tổng tiền: {Fomat(sum)}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
