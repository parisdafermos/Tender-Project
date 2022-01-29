import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const getProducts = async () => {
    const products = await fetch(
      `https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/items.json`
    );
    return await products.json();
  };
  const productAvailable = async (productsList) => {
    const products = await getProducts();

    const unavailableItems = productsList.filter(
      (product) => product.amount >= products[product.id].quantity
    );

    return unavailableItems.length === 0; // returns true if there are no unavailable items
  };
  const updateItems = async (productsList) => {
    const products = await getProducts();
    productsList.forEach((product) => {
      fetch(
        `https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/items/${product.id}/.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            quantity: products[product.id].quantity - product.amount,
          }),
        }
      );
    });
  };
  const submitOrderHandler = async (userData) => {
    const itemsAreAvailable = await productAvailable(cartCtx.items);
    if (!itemsAreAvailable) {
      return;
    }

    setIsSubmitting(true);
    await fetch(
      "https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
          quantity: cartCtx.quantity,
        }),
      }
    );
    updateItems(cartCtx.items);
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
    window.location.reload(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}{" "}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {" "}
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );
  const isSubmittingModalContent = <p> Sending order data...</p>;

  const didSubmitModalContent = <p> Successfully sent the order!</p>;
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
