import Header from "./components/Layout/Header";
import { useState } from "react";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Fragment } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Items />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
// 1 item remove nad add quantities

// remove an item when customer buys from basket

// should display current items in store

// when they press checkout those items are removed from the store

// login button that pops an alert , mr virji will adjust it loginButtonHandler
