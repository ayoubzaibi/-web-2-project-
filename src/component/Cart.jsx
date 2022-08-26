import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart, increment } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.handleCart);

  return (
    <div>
      {state.handleCart.map((product) => (
        <div>
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-med-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => dispatch(delCart(product))}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => dispatch(increment(product.id))}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
