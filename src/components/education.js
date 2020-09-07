import React, { useState } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";

import { clearName } from "../services/misc";
import css from "./education.module.css";

const EducationCard = ({ education }) => {
  const [selected, setSelected] = useState(0);
  const intl = useIntl();

  const schools = intl.messages.cards.educations;

  const changeSelection = (idx) => (e) => {
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
            <a
              key={index}
              className={logoBox}
              onClick={changeSelection(index)}
              href={"#education-" + index}
            >
              <img src={img} alt={school.name} className={css.logo} />
            </a>
          );
        })}
      </div>
      <div className={css.slider}>
        <div className={css.slides}>
          {schools.map((school, index) => {
            const canPrev = index > 0;
            const canNext = index < schools.length - 1;

            const prevArrow = classnames(css.prevArrow, {
              [css.disabled]: !canPrev,
            });
            const nextArrow = classnames(css.lastArrow, {
              [css.disabled]: !canNext,
            });

            return (
              <div
                className={css.wrapper}
                key={index}
                onMouseEnter={changeSelection(index)}
                id={"education-" + index}
              >
                <div className={css.card}>
                  <div className={css.cardHeader}>
                    <div className={css.schoolName}>{school.name}</div>
                    <div className={css.location}>{school.location}</div>
                  </div>
                  <div className={css.diplomaTitle}>{school.title}</div>
                  <div className={css.description}>
                    {school.description.map((desc, index) => {
                      return (
                        <p key={index}>
                          {desc}
                          <br />
                        </p>
                      );
                    })}
                  </div>
                  {school.technologies.length !== 0 && (
                    <div className={css.technologiesWrapper}>
                      <span>{intl.messages.cards.technologies_learnt}</span>
                      <div className={css.iconsList}>
                        {school.technologies.map((tech, index) => {
                          const fileName =
                            "icons/tech/" + clearName(tech) + ".svg";
                          return (
                            <div className={css.iconContainer} key={index}>
                              <img
                                src={fileName}
                                alt=""
                                className={css.icons}
                              />
                              <p className={css.iconText}>{tech}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                {/* <a
                  className={prevArrow}
                  onClick={changeSelection(canPrev ? index - 1 : index)}
                  href={"#education-" + (index - 1)}
                >
                  <img
                    src="icons/next_arrow.svg"
                    alt="previous"
                    className={classnames(css.arrowImage, css.turnedArrow)}
                  />
                </a>
                <a
                  className={nextArrow}
                  onClick={changeSelection(canNext ? index + 1 : index)}
                  href={"#education-" + (index + 1)}
                >
                  <img
                    src="icons/next_arrow.svg"
                    alt="next"
                    className={css.arrowImage}
                  />
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
