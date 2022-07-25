import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cart from '../images/cart.png'
import HomeImage from '../images/house.png'

const Products = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="productConatiner">
      <div className="navigation">
        <p>
        <img src={HomeImage} class="icon"/>

        </p>
        <Link to="/cart">
          <img src={Cart} class="icon"/>
        </Link>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p>R {item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item }).then(alert(" item added to cart"))}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
