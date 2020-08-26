import React, { useState } from "react";
import css from "./app.module.css";
import NavBar from "./components/nav-bar";
import classnames from "classnames";

function App() {
  return (
    <div className={css.app}>
      <NavBar />
      <div>Hello world</div>
    </div>
  );
}

export default App;
