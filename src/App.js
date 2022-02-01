import Header from "./components/Layout/Header";
import { useState } from "react";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Fragment } from "react";
import Card from "./components/UI/Card";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const isAdmin = true;
  const isStoreman = true;
  const isAdminOrStoreman = isAdmin || isStoreman;
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const changeOwnerHandler = () => {
    alert("alert button clicked!");
  };
  const setAccountsAddressHandler = () => {
    alert("alert button clicked!");
  };
  const setCurrencyAddressHandler = () => {
    alert("alert button clicked!");
  };
  const setFactoryAddressHandler = () => {
    alert("alert button clicked!");
  };
  const setWidgetPriceHandler = () => {
    alert("alert button clicked!");
  };
  const setWarehouseAddressHandler = () => {
    alert("alert button clicked!");
  };
  const transferPassHandler = () => {
    alert("alert button clicked!");
  };
  const withdrawCashHandler = () => {
    alert("alert button clicked!");
  };
  const issueStoremanPassHandler = () => {
    alert("alert button clicked!");
  };
  const createAtFactoryHandler = () => {
    alert("alert button clicked!");
  };
  const destroyWidgetsHandler = () => {
    alert("alert button clicked!");
  };
  const checkPartyPassesHandler = () => {
    alert("alert button clicked!");
  };
  const CurrencyAddressHandler = () => {
    alert("alert button clicked!");
  };
  const FactoryAddressHandler = () => {
    alert("alert button clicked!");
  };

  const adminButtons = (
    <section className="button-section">
      <Card>
        <p className="function-para"> Owner Functions</p>
        <div className="function-div">
          <label htmlFor="newOwner" className="label-font">
            <input type="text" id="newOwner" placeholder="address" />
            <button className="admin-button" onClick={changeOwnerHandler}>
              {" "}
              Change Owner
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="accountsAddress" className="label-font">
            <input type="text" id="accountsAddress" placeholder="address" />
            <button
              className="admin-button"
              onClick={setAccountsAddressHandler}
            >
              {" "}
              Set Accounts Address
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="currencyAddress" className="label-font">
            <input type="text" id="currencyAddress" placeholder="address" />
            <button
              className="admin-button"
              onClick={setCurrencyAddressHandler}
            >
              {" "}
              Set Currency Address
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="factoryAddress" className="label-font">
            <input type="text" id="factoryAddress" placeholder="address" />
            <button className="admin-button" onClick={setFactoryAddressHandler}>
              {" "}
              Set Factory Address
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="WarehouseAddress" className="label-font">
            <input type="text" id="WarehouseAddress" placeholder="address" />
            <button
              className="admin-button"
              onClick={setWarehouseAddressHandler}
            >
              {" "}
              Set Warehouse Address
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="WidgetPrice" className="label-font">
            <input type="text" id="WidgetPrice" placeholder="unit256" />
            <button className="admin-button" onClick={setWidgetPriceHandler}>
              {" "}
              Set Widget Price
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="transferRecipient" className="label-font">
            <input
              type="text"
              id="transferRecipient"
              placeholder="recipient address"
            />
            <label htmlFor="transferAmount" className="label-font">
              <input
                type="text"
                id="transferAmount"
                placeholder="unit256 amount "
              />
              <button className="admin-button" onClick={transferPassHandler}>
                {" "}
                Transfer Pass
              </button>
            </label>
          </label>
        </div>
        <div className="function-div">
          <br />
          <label htmlFor="withdrawcash" className="label-font">
            <input
              type="text"
              id="withdrawcash"
              placeholder="withdrawalAmount"
            />
            <button className="admin-button" onClick={withdrawCashHandler}>
              {" "}
              Withdraw Cash from Warehouse to Accounts
            </button>
          </label>
        </div>
        <div className="function-div">
          <p className="function-para"> </p>
          <label htmlFor="storemanpass" className="label-font">
            <input type="text" id="storemanpass" placeholder="unit256" />
            <button className="admin-button" onClick={issueStoremanPassHandler}>
              {" "}
              Issue Storeman Pass
            </button>
          </label>
        </div>
      </Card>
    </section>
  );
  const storemanButtons = (
    <section className="button-section">
      <Card>
        <p className="function-para"> Storeman Functions</p>
        <div className="function-div">
          <p className="function-para"> </p>
          <label htmlFor="createAtFactory" className="label-font">
            <input type="text" id="createAtFactory" placeholder="unit256" />
            <button
              className="storeman-button"
              onClick={createAtFactoryHandler}
            >
              {" "}
              Create At Factory
            </button>
          </label>
        </div>{" "}
        <div className="function-div">
          <p className="function-para"> </p>
          <label htmlFor="destroywidgets" className="label-font">
            <input type="text" id="destroywidgets" placeholder="unit256" />
            <button className="storeman-button" onClick={destroyWidgetsHandler}>
              {" "}
              Destroy Widgets for Recycling
            </button>
          </label>
        </div>
        <div className="function-div">
          <p className="function-para"> </p>
          <label htmlFor="destroywidgets" className="label-font">
            <input
              type="text"
              id="destroywidgets"
              placeholder="PartysAddress"
            />
            <button
              className="storeman-button"
              onClick={checkPartyPassesHandler}
            >
              {" "}
              Check Passes Any Party Has
            </button>
          </label>
        </div>
        <div className="function-div">
          <br />
          <button className="blue-button" onClick={CurrencyAddressHandler}>
            {" "}
            Currency Address
          </button>
        </div>
        <div className="function-div">
          <br />
          <button className="blue-button" onClick={FactoryAddressHandler}>
            {" "}
            Factory Address
          </button>
        </div>
      </Card>
    </section>
  );
  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Items />
          {isAdmin && adminButtons}
          {isAdminOrStoreman && storemanButtons}
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
