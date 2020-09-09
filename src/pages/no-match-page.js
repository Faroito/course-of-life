import React from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";

import css from "./no-match-page.module.css";

const NoMatchPage = ({ location }) => {
  const intl = useIntl();
  return (
    <div className={css.page}>
      <div>
        <div className={css.error}>{intl.messages.noMatchPage.error} 404</div>
        <div className={css.message}>{intl.messages.noMatchPage.message}</div>
      </div>
    </div>
  );
};

export default NoMatchPage;
