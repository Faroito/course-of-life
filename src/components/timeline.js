import React from "react";
import classnames from "classnames";
import moment from "moment";

import css from "./timeline.module.css";

const Timeline = ({ fold, date_start, date_end }) => {
  const start = moment(date_start);
  const end = moment(date_end);
  const monthNb = end.diff(start, "month") + 1;

  const timeline = classnames(css.timeline, { [css.timelineUnfold]: !fold });
  const dateInfo = classnames(css.dateInfo, { [css.hide]: fold });
  const months = classnames(css.months, { [css.hide]: fold });

  return (
    <div className={timeline}>
      <div className={dateInfo}>
        {start.format("MMM. YYYY")} {" - "} {end.format("MMM. YYYY")}
      </div>
      <div className={css.point} />
      <div className={css.dateBox}>
        <span className={css.dateYear}>{start.format("YYYY")}</span>
        <div className={css.arrow} />
      </div>
      <div className={months}>{monthNb} month</div>
    </div>
  );
};

export default Timeline;
