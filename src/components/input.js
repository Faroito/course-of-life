import React, { useState } from "react";

import classnames from "classnames";
import css from "./css/input.module.css";

const Input = ({ form, setForm, title, text, isRequired, type = "input" }) => {
  const keyName = title.toLowerCase();

  const handleChange = (event) => {
    setForm({ ...form, [keyName]: event.target.value });
  };

  const textInput = classnames(css.textInput, { [css.required]: isRequired });
  const textArea = classnames(css.textArea, { [css.required]: isRequired });

  return (
    <div className={css.input}>
      <span className={css.title}>{title + " *"}</span>
      {type === "input" && (
        <input
          className={textInput}
          value={form[keyName]}
          placeholder={text}
          onChange={handleChange}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={textArea}
          value={form[keyName]}
          placeholder={text}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;
