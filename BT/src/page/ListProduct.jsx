import React from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Fomat } from "../common/Fomat";
import { cartActionAdd } from "../action/cartAction";
import { Link } from "react-router-dom";
import { notification } from "antd";

export const ListProduct = () => {
  const listProduct = useSelector((pro) => pro.listproduct);
  const dispatch = useDispatch();
  const handelAddToCart = (e) => {
    dispatch(cartActionAdd(e));
    notification.success({
      message: "Thêm sản phẩm thành công",
      description: `sản phẩm ${e.product_name} đã được thêm vào giỏ hàng`,
      duration: 1.5,
    });
  };
  return (
    <div>
      <NavBar />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>DANH SÁCH SẢN PHẨM</strong>
          </h4>
          <div className="row">
            {listProduct.map((e) => (
              <div className="col-lg-4 col-md-12 mb-4" key={e.product_id}>
                <div className="card">
                  <Link
                    to={"/lisproduct/" + e.product_id}
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img src={e.image} className="w-100" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="card-body">
                    <a href="" className="text-reset">
                      <Link
                        style={{ color: "#000", fontSize: 20 }}
                        to={"/lisproduct/" + e.product_id}
                        className="card-title mb-3"
                      >
                        {e.product_name}
                      </Link>
                    </a>
                    <h6 className="mb-3">{Fomat(e.price)}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => handelAddToCart(e)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
