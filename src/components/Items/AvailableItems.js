import React, { useEffect, useState } from "react";
import classes from "./AvailableItems.module.css";
import Card from "../UI/Card";
import Item from "./Item/Item";

export default function AvailableItems() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://tender-project-90a6d-default-rtdb.europe-west1.firebasedatabase.app/items.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          quantity: responseData[key].quantity,
        });
      }

      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p> Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <Item
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      quantity={meal.quantity}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {" "}
        <ul>{mealsList} </ul>
      </Card>
    </section>
  );
}
