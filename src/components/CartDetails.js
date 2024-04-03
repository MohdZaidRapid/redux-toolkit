import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  removeToCart,
  removeSingleItems,
  emptyCartItem,
} from "../redux/features/cartSlice";

const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQunatity] = useState(0);

  const dispatch = useDispatch();

  // add to cart
  const handleIncrement = (e) => {
    dispatch(addTocart(e));
  };

  // remove to singlecart
  const handleDecrement = (id) => {
    dispatch(removeToCart(id));
  };

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItems(e));
  };

  // empty cart
  const emptyCart = () => {
    dispatch(emptyCartItem());
  };

  // count total price
  const total = () => {
    let totalPrice = 0;
    carts.map((ele, ind) => {
      totalPrice = ele.price * ele.qnty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  const countQuantity = () => {
    let totalQuantity = 0;
    carts.map((ele, ind) => {
      totalQuantity = ele.qnty + totalQuantity;
    });
    setTotalQunatity(totalQuantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countQuantity();
  }, [countQuantity]);
  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5 cardsdetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">
                Cart Calculations{carts.length > 0 ? `(${carts.length})` : ""}
              </h5>
              {carts.length > 0 ? (
                <button
                  className="btn btn-danger mt-0 btn-sm"
                  onClick={() => emptyCart()}
                >
                  <i className="fa fa-trash-alt mr-2"></i>
                  <span>EmptyCart</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-body p-0">
            {carts.length === 0 ? (
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table cart-table mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Products</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">
                      <span id="amount" className="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((data, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <button
                              className="prdct-delete"
                              onClick={() => handleDecrement(data.id)}
                            >
                              <i className="fa fa-trash-alt mr-2"></i>
                            </button>
                          </td>
                          <td>
                            <div className="product-img">
                              <img src={data.imgdata} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="product-name">
                              <p>{data.dish}</p>
                            </div>
                          </td>
                          <td>{data.price}</td>
                          <td>
                            <div className="prdct-qty-container">
                              <button
                                className="prdct-qty-btn"
                                type="button"
                                onClick={
                                  data.qnty <= 1
                                    ? () => handleDecrement(data.id)
                                    : () => handleSingleDecrement(data)
                                }
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              <input
                                type="text"
                                className="qty-input-box"
                                value={data.qnty}
                                name=""
                                id=""
                                disabled
                              />
                              <button
                                className="prdct-qty-btn"
                                type="button"
                                onClick={() => handleIncrement(data)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="text-right">
                            {data.qnty * data.price}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>
                      Items In Cart <span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{totalQuantity}</span>
                    </th>
                    <th className="text-right">
                      Total Price <span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{totalPrice}</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
