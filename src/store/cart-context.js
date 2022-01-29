import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  editItem: (itemId, property, value) => {
    window.location.reload(false);
  },
});

export default CartContext;
