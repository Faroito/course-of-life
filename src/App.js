import React, { useState } from "react";
import { IntlProvider } from "react-intl";
// import classnames from "classnames";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

import Body from "./components/body";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import css from "./app.module.css";

const messages = { fr, en };

const matcher = window.matchMedia("(prefers-color-scheme: dark)");

const lightSchemeIcon = document.querySelector("link#light-scheme-icon");
const darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

const onUpdate = () => {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
};

const App = () => {
  // const [language, setLanguage] = useState(navigator.language.split(/[-_]/)[0]);
  const [language, setLanguage] = useState("en");

  matcher.addListener(onUpdate);
  onUpdate();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className={css.app}>
        <NavBar language={language} setLanguage={setLanguage} />
        <Body />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
