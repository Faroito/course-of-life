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
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="icons/linkedin.svg" alt="linkedin" className={css.logo} />
        </a>
        <a
          className={css.icon}
          href="https://github.com/Faroito"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="icons/github.svg" alt="github" className={css.logo} />
        </a>
      </div>
      {/* <Link className={css.button} to={link}>
        <span>{text}</span>
      </Link> */}
      <div className={css.button}>
        <span>{text}</span>
      </div>
      <Link
        className={css.icon}
        to="/files/timothee_couble_en.pdf"
        target="_blank"
        download
      >
        <img src="icons/download.svg" alt="download" className={css.logo} />
      </Link>
    </footer>
  );
};

export default Footer;
