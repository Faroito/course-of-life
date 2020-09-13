import React from "react";
import classnames from "classnames";
import moment from "moment";
import { useIntl } from "react-intl";

import css from "./timeline.module.css";

const Timeline = ({ fold, date_start, date_end, duration, idx }) => {
  const intl = useIntl();

  const start = moment(date_start);
  const end = moment(date_end);

  const monthNb = duration ? duration : end.diff(start, "month") + 1;
  const isMonth = monthNb < 24;
  const durationText = isMonth
    ? monthNb.toString().concat(intl.messages.cards.months)
    : (monthNb / 12).toString().concat(intl.messages.cards.years);

  const len = intl.messages.cards.experiences.length;

  const timeline = classnames(css.timeline, {
    [css.timelineUnfold]: !fold,
    [css.timelineStart]: idx === len - 1,
    [css.timelineEnd]: idx === 0,
  });
  const dateInfo = classnames(css.dateInfo, { [css.hide]: fold });
  const months = classnames(css.months, { [css.hide]: fold });

  return (
    <div className={timeline}>
      <div className={dateInfo}>
        {start.format("MMM. YYYY") + " - " + end.format("MMM. YYYY")}
      </div>
      <div className={css.point} />
      <div className={css.dateBox}>
        <span className={css.dateYear}>{start.format("YYYY")}</span>
        <div className={css.arrow} />
      </div>
      <div className={months}>{durationText}</div>
    </div>
  );
};

export default Timeline;
