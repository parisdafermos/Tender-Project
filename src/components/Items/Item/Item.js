import React from "react";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
function Item(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //makes sure output has 2 decimals
  const isAdmin = true;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      quantity: props.quantity,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.price}>
          Available Quantity:{" "}
          {isAdmin && (
            <button
              className={`${classes.button} ${classes.remove}`}
              onClick={() => props.updateQuantity(props.id, props.quantity, -1)}
            >
              -
            </button>
          )}
          {props.quantity}
          {isAdmin && (
            <button
              className={classes.button}
              onClick={() => props.updateQuantity(props.id, props.quantity, 1)}
            >
              +
            </button>
          )}
        </div>
      </div>
      <div>
        <ItemForm
          onAddToCart={addToCartHandler}
          id={props.id}
          quantity={props.quantity}
        />
      </div>
    </li>
  );
}

export default Item;
