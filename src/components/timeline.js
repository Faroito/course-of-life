import React from "react";
import classnames from "classnames";

import css from "./timeline.module.css";

const formatDate = (start, end) => {
  const s_mm = String(start.getMonth() + 1).padStart(2, "0");
  const s_yy = start.getFullYear();
  const e_mm = String(end.getMonth() + 1).padStart(2, "0");
  const e_yy = end.getFullYear();
  return `${s_mm}/${s_yy} - ${e_mm}/${e_yy}`;
};

const Timeline = ({ fold, date_start, date_end }) => {
  const start = new Date(date_start);
  const end = new Date(date_end);

  const timeline = classnames(css.timeline, { [css.timelineUnfold]: !fold });
  const dateInfo = classnames(css.dateInfo, { [css.hide]: fold });

  return (
    <div className={timeline}>
      <div className={dateInfo}>{formatDate(start, end)}</div>
      <div className={css.point} />
      <div className={css.dateBox}>
        <span className={css.dateYear}>{start.getFullYear()}</span>
        <div className={css.arrow} />
      </div>
    </div>
  );
};

export default Timeline;
