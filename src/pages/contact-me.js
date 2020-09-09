import React, { useState } from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";

import Form from "../components/input";
import css from "./contact-me.module.css";

const ContactMe = ({ contact }) => {
  const intl = useIntl();
  const [form, setForm] = useState({
    date: Date.now(),
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {};

  return (
    <div className={css.page}>
      <div className={css.contact}>
        <div className={css.title}>{intl.messages.contact.title}</div>
        <div className={css.form}>
          {intl.messages.contact.inputs.map((input, index) => {
            return (
              <Form form={form} setForm={setForm} {...input} key={index} />
            );
          })}
          <div className={css.submit} onClick={handleSubmit}>
            {intl.messages.contact.submit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
