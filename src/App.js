import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

import Main from "./router/main";
import css from "./app.module.css";

const messages = { fr, en };

const App = () => {
  // const [language, setLanguage] = useState(navigator.language.split(/[-_]/)[0]);
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const app = classnames(css.app, { [css.noNav]: location.pathname === "/" });

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className={app}>
        <Main language={language} setLanguage={setLanguage} />
      </div>
    </IntlProvider>
  );
};

export default App;
