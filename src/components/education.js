import React, { useState } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";

import { clearName } from "../services/misc";
import css from "./education.module.css";

const EducationCard = ({ education }) => {
  const [selected, setSelected] = useState(0);
  const intl = useIntl();

  const schools = intl.messages.cards.educations;

  const onClick = (idx) => (e) => {
    setSelected(idx);
  };

  return (
    <div className={css.education}>
      <div className={css.logoLine}>
        {schools.map((school, index) => {
          const img = "logos/" + clearName(school.name) + ".png";
          const logoBox = classnames(css.logoBox, {
            [css.logoBoxSelected]: index === selected,
          });

          return (
            <div key={index} className={logoBox} onClick={onClick(index)}>
              <img src={img} alt={school.name} className={css.logo} />
            </div>
          );
        })}
      </div>
      <div className={css.card}>
        <div className={css.cardHeader}>
          <div className={css.schoolName}>{schools[selected].name}</div>
          <div className={css.location}>{schools[selected].location}</div>
        </div>
        <div className={css.diplomaTitle}>{schools[selected].title}</div>
        <div className={css.description}>
          {schools[selected].description.map((desc, index) => {
            return (
              <p key={index}>
                {desc}
                <br />
              </p>
            );
          })}
        </div>
        {schools[selected].technologies.length !== 0 && (
          <div>
            <span>{intl.messages.cards.technologies_learnt}</span>
            <div className={css.iconsList}>
              {schools[selected].technologies.map((tech, index) => {
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
        )}
      </div>
    </div>
  );
};

export default EducationCard;
