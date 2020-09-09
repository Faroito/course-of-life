import React, { useState } from "react";

// import classnames from "classnames";
import css from "./input.module.css";

const Input = ({
  form,
  setForm,
  title,
  text,
  required = false,
  type = "input",
}) => {
  const keyName = title.toLowerCase();

  const handleChange = (event) => {
    setForm({ ...form, [keyName]: event.target.value });
  };

  return (
    <div className={css.input}>
      <span className={css.title}>{title + " " + (required ? "*" : "")}</span>
      {type === "input" && (
        <input
          className={css.textInput}
          value={form[keyName]}
          placeholder={text}
          onChange={handleChange}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={css.textArea}
          value={form[keyName]}
          placeholder={text}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;
