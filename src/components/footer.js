import React from "react";
// import { useIntl } from "react-intl";
// import classnames from "classnames";
import css from "./footer.module.css";

const Footer = ({ language }) => {
  return (
    <footer>
      <div className={css.externLink}>
        <a
          className={css.icon}
          href="https://www.linkedin.com/in/timothee-couble/"
        >
          <img src="icons/linkedin.svg" alt="linkedin" className={css.logo} />
        </a>
        <a className={css.icon} href="https://github.com/Faroito">
          <img src="icons/github.svg" alt="github" className={css.logo} />
        </a>
      </div>
      <div className={css.contact}>Contact me</div>
      <div className={css.icon}>
        <img src="icons/download.svg" alt="download" className={css.logo} />
      </div>
    </footer>
  );
};

export default Footer;