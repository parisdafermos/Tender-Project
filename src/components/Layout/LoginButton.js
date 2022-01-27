import React from "react";
import classes from "./LoginButton.module.css";
export default function LoginButton() {
  function loginButtonHandler() {
    alert("alert button clicked!");
    // here will go the logic behind logging in
  }
  return (
    <button className={classes.button} onClick={loginButtonHandler}>
      <span> Login</span>
    </button>
  );
}
