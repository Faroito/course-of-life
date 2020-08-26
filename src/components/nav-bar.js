import React from "react";
import classnames from "classnames";
import css from "./nav-bar.module.css";

const NavBar = ({}) => {
  return (
    <header className={css.header}>
      <img src="tim_logo.svg" alt="" className={css.logo} />
      <h1 className={css.name}>Timothée Couble</h1>
    </header>
  );
};

export default NavBar;
