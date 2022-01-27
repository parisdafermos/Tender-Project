import { Fragment } from "react";
import classes from "./Header.module.css";
import automationImage from "../../assets/automation.jpg";
import HeaderCartButton from "./HeaderCartButton";
import LoginButton from "./LoginButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Tender</h1>
        <LoginButton />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={automationImage} alt="a table full of delicious food!" />
      </div>
    </Fragment>
  );
}
