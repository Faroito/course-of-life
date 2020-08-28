import React from "react";
import { useIntl } from "react-intl";
// import classnames from "classnames";
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
  const intl = useIntl();
  return (
    <div className={css.card}>
      <div className={css.companyLogo}>
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
        </div>
        <div className={css.jobTitle}>{title}</div>
        <div className={css.description}>
          {description.map((desc, index) => {
            return (
              <p key={index}>
                {desc}
                <br />
              </p>
            );
          })}
        </div>
        <div>{intl.messages.cards.technologies}</div>
        <div className={css.iconsList}>
          {technologies.map((tech, index) => {
            const fileName = "icons/" + clearName(tech) + ".svg";
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
