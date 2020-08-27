import React from "react";
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
  return (
    <div className={css.card}>
      <div className={css.companyLogo}>
        <img src={"logo/" + clearName(name) + ".png"} className={css.logo} />
      </div>
      <div>
        <div>{title}</div>
        <div>{location}</div>
        <div>
          {technologies.map((tech, index) => {
            const fileName = "icons/" + clearName(tech) + ".svg";
            console.log(fileName);
            return (
              <img
                src={fileName}
                alt={tech}
                key={index}
                className={css.icons}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
