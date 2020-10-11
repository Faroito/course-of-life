import React, { useState } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";
import Timeline from "./timeline";

import { clearName } from "../services/misc";
import IconsList from "./icons-list";

import css from "./css/experience-card.module.css";

const ExperienceCard = ({
  name,
  title,
  location,
  date_start,
  date_end,
  duration,
  description,
  technologies,
  idx,
}) => {
  const [fold, setFold] = useState(true);
  const intl = useIntl();

  const card = classnames(css.card, { [css.cardFold]: fold });
  const arrow = classnames(css.arrow, { [css.turnedArrow]: fold });
  const companyLogo = classnames(css.companyLogo, {
    [css.companyLogoFold]: fold,
  });
  const descriptionStyle = classnames(css.description, css.transition, {
    [css.hide]: fold,
  });
  const techStyle = classnames(css.transition, { [css.hide]: fold });

  const doUnfold = (e) => {
    setFold(!fold);
  };

  return (
    <div className={css.position}>
      <div className={card}>
        <div className={companyLogo}>
          <img
            src={"logos/" + clearName(name) + ".png"}
            alt=""
            className={css.logo}
          />
        </div>
        <div className={css.cardText}>
          <div className={css.cardHeader}>
            <div className={css.companyName}>{name}</div>
            <div className={css.location}>{location}</div>
            <img
              onClick={doUnfold}
              className={arrow}
              src="icons/fold-arrow.svg"
              alt={intl.messages.cards.unfold}
            />
          </div>
          <div className={css.jobTitle}>{title}</div>
          <div className={descriptionStyle}>
            {description.map((desc, index) => {
              return (
                <p key={index}>
                  {desc}
                  <br />
                </p>
              );
            })}
          </div>
          <div className={techStyle}>
            {intl.messages.cards.technologies_used}
          </div>
          <IconsList icons={technologies} />
        </div>
      </div>
      <Timeline
        fold={fold}
        date_start={date_start}
        date_end={date_end}
        duration={duration}
        idx={idx}
      />
    </div>
  );
};

export default ExperienceCard;
