import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";

import Body from "../pages/body";
import ContactMe from "../pages/contact-me";
import NoMatchPage from "../pages/no-match-page";

import Footer from "../components/footer";
import NavBar from "../components/nav-bar";

import css from "../pages/body.module.css";

const Main = (language, setLanguage) => {
  const intl = useIntl();
  const location = useLocation();

  const button = {
    home: {
      link: "/",
      text: intl.messages.footer.home,
    },
    contact: {
      link: "/contact-me",
      text: intl.messages.footer.contact,
    },
  };
  const footerLink = location.pathname === "/" ? button.contact : button.home;

  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage} />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/contact-me" component={ContactMe} />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer {...footerLink} />
    </div>
  );
};

export default Main;
