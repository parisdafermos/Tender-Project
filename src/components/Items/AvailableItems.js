import React, { useEffect, useState } from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import Item from "./Item/Item";

export default function AvailableItems() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  const updateQuantity = async (itemId, quantity, modifier) => {
    const newQuantity = quantity + modifier;
    await fetch(
      `https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}/.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          quantity: newQuantity,
        }),
      }
    );
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/items.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          quantity: responseData[key].quantity,
        });
      }

      setItems(loadedItems);
      setIsloading(false);
    };

    fetchItems().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ItemsLoading}>
        <p> Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.ItemsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const itemsList = items.map((item) => (
    <Item
      updateQuantity={updateQuantity}
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      quantity={item.quantity}
    />
  ));
  return (
    <section className={classes.items}>
      <Card>
        {" "}
        <ul>{itemsList} </ul>
      </Card>
    </section>
  );
}
