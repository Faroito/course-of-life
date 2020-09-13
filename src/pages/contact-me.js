import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Redirect } from "react-router-dom";

import Form from "../components/input";
import css from "./contact-me.module.css";

const defaultForm = {
  date: Date.now(),
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactMe = ({ contact }) => {
  const intl = useIntl();
  const [form, setForm] = useState(defaultForm);
  const [trySubmit, setTrySubmit] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const isRequired = (title, submitting = false) => {
    const key = title.toLowerCase();
    return trySubmit || submitting ? form[key] === "" : false;
  };

  const handleSubmit = (e) => {
    const missingKey = intl.messages.contact.inputs.findIndex((elem) =>
      isRequired(elem.title, true)
    );
    const fieldsCompleted = missingKey === -1;

    if (fieldsCompleted) setForm(defaultForm);
    setTrySubmit(fieldsCompleted ? false : true);
    setRedirect(fieldsCompleted ? true : false);
  };

  if (redirect) return <Redirect to="/" />;
  return (
    <div className={css.page}>
      <div className={css.form}>
        <div className={css.title}>{intl.messages.contact.title}</div>
        {intl.messages.contact.inputs.map((input, index) => {
          return (
            <Form
              form={form}
              setForm={setForm}
              isRequired={isRequired(input.title)}
              {...input}
              key={index}
            />
          );
        })}
        <p className={css.requiredMessage}>
          {"* " + intl.messages.contact.required}
        </p>
        <div className={css.submit} onClick={handleSubmit}>
          {intl.messages.contact.submit}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
