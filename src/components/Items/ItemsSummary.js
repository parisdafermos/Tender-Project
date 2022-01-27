import classes from "./ItemsSummary.module.css";

const ItemsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Excellent Widgets</h2>
      <p>
        Choose your favorite widget from our broad selection of available
        widgets.
      </p>
      <p>All our widgets are of the highest quality!</p>
    </section>
  );
};

export default ItemsSummary;
