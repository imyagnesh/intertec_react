import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteWithSubRoutes } from "../app";
import { Switch } from "react-router-dom";
import Form from "../components/form";
import { productFields } from "./formData";
import { action } from "../utils";
import * as types from "../constants/actionTypes";

const Products = ({
  routes,
  products,
  cart,
  fetchProductsRequest,
  createProductRequest,
  deleteProductRequest,
  addToCart,
  updateToCart,
  loading
}) => {
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchProductsRequest();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Products</h1>

      {!!cart && <button type="button">{`Cart Items: ${cart.length}`}</button>}

      {!!cart &&
        cart.map(item => (
          <div key={item.id} style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flex: 1 }}>
              <div>
                <div>
                  <span>{item.ProductName}</span>
                </div>
                <div>
                  <span>{item.ProductCategory}</span>
                </div>
                <div>
                  <span>{item.Price}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                updateToCart({ ...item, quantity: item.quantity + 1 })
              }
            >
              +
            </button>
            <div>
              <span>{item.quantity}</span>
            </div>
            <button
              type="button"
              onClick={() =>
                updateToCart({ ...item, quantity: item.quantity - 1 })
              }
            >
              -
            </button>
          </div>
        ))}

      <Form
        initialValues={
          initialValues ||
          productFields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})
        }
        enableReinitialize
        onSubmit={createProductRequest}
        fields={productFields}
      />

      {products &&
        products.map(product => (
          <div
            key={product.id}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div>
                <div>
                  <span>{product.ProductName}</span>
                </div>
                <div>
                  <span>{product.ProductCategory}</span>
                </div>
                <div>
                  <span>{product.Price}</span>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => setInitialValues(product)}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add To Cart
            </button>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
  loading:
    state.loading[types.FETCH_PRODUCTS] || state.loading[types.CREATE_PRODUCT]
});

const mapDispatchToProps = dispatch => ({
  changeLocale: payload => dispatch(action("CHANGE_LOCALE")),
  fetchProductsRequest: () =>
    dispatch(action(`${types.FETCH_PRODUCTS}_${types.REQUEST}`)),
  createProductRequest: (values, actions) =>
    dispatch(
      action(`${types.CREATE_PRODUCT}_${types.REQUEST}`, values, actions)
    ),
  deleteProductRequest: payload =>
    dispatch(action(`${types.DELETE_PRODUCT}_${types.REQUEST}`, payload)),
  addToCart: payload => dispatch({ type: "ADD_TO_CART", payload }),
  updateToCart: payload => dispatch({ type: "UPDATE_TO_CART", payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
