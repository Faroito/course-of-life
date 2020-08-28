import React, { useState } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";
import css from "./experience-card.module.css";

const clearName = (name) => {
  return name
    .toLowerCase()
    .replace(/[0-9]/g, "")
    .replace(".", "-")
    .replace(" ", "-")
    .replace(/\+/g, "plus");
};

const ExperienceCard = ({
  name,
  title,
  location,
  date_start,
  date_end,
  description,
  technologies,
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
    <div className={card}>
      <div className={companyLogo}>
        <img
          src={"logo/" + clearName(name) + ".png"}
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
            src="icons/arrow.svg"
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
        <div className={techStyle}>{intl.messages.cards.technologies}</div>
        <div className={css.iconsList}>
          {technologies.map((tech, index) => {
            const fileName = "icons/tech/" + clearName(tech) + ".svg";
            return (
              <div className={css.iconContainer} key={index}>
                <img src={fileName} alt="" className={css.icons} />
                <p className={css.iconText}>{tech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
