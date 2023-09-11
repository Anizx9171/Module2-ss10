import React from "react";
import { NavBar } from "../layout/NavBar";
import { Footer } from "../layout/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fomat } from "../common/Fomat";
import { cartActionAdd } from "../action/cartAction";
import { notification } from "antd";

export const Detail = () => {
  const { idProduct } = useParams();
  const listProduct = useSelector((e) => e.listproduct);
  const product = listProduct.find((e) => +idProduct === e.product_id);
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
    <>
      <NavBar />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src={product.image} className="w-100" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{product.product_name}</h5>
                      <h4 className="mb-2 t">Mô tả</h4>
                      <p className="mb-4 mb-md-0">{product.description}</p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">{Fomat(product.price)}</h4>
                      </div>
                      <div className="d-flex flex-column mt-4">
                        <button
                          onClick={() => handelAddToCart(product)}
                          className="btn btn-primary btn-sm"
                          type="button"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
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
