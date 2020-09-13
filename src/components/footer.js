import React from "react";
import { Link } from "react-router-dom";

import css from "./css/footer.module.css";

const Footer = ({ link, text }) => {
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
      <Link className={css.contact} to={link}>
        <span>{text}</span>
      </Link>
      <div className={css.icon}>
        <img src="icons/download.svg" alt="download" className={css.logo} />
      </div>
    </footer>
  );
};

export default Footer;
