import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";

import useScrollPosition from "../hooks/useScrollPosition";
import { clearName } from "../services/misc";
import css from "./education.module.css";

const cardPosition = [10, 530, 1050];
const cardWidth = 520;

const EducationCard = ({ education }) => {
  const [selected, setSelected] = useState(0);
  const [onCard, setOnCard] = useState();
  const intl = useIntl();
  const scroolRef = useRef(null);
  const scrollPosition = useScrollPosition(scroolRef);

  const changeSelection = (idx) => (e) => {
    scroolRef.current.scrollLeft = cardPosition[idx];
    setSelected(idx);
  };

  useEffect(() => {
    const leftPos = scrollPosition.left;
    const isFixed = cardPosition.findIndex((i) => i === leftPos);
    if (isFixed === selected) setOnCard(selected);
    if (selected === onCard) {
      const selection = cardPosition.findIndex(
        (i) => i - cardWidth / 2 < leftPos && leftPos < i + cardWidth / 2
      );
      if (selection !== -1) {
        setOnCard(selection);
        setSelected(selection);
      }
    }
  }, [scrollPosition, selected, onCard]);

  const schools = intl.messages.cards.educations;

  const canPrev = selected > 0;
  const canNext = selected < schools.length - 1;

  const prevArrow = classnames(css.arrow, css.prevArrow, {
    [css.disabled]: !canPrev,
  });
  const nextArrow = classnames(css.arrow, css.nextArrow, {
    [css.disabled]: !canNext,
  });

  return (
    <div className={css.education}>
      <div className={css.logoLine}>
        {schools.map((school, index) => {
          const img = "logos/" + clearName(school.name) + ".png";
          const logoBox = classnames(css.logoBox, {
            [css.logoBoxSelected]: index === selected,
          });

          return (
            <div
              key={index}
              className={logoBox}
              onClick={changeSelection(index)}
            >
              <img src={img} alt={school.name} className={css.logo} />
            </div>
          );
        })}
      </div>
      <div className={css.slider}>
        <div className={css.slides} ref={scroolRef}>
          {schools.map((school, index) => {
            return (
              <div className={css.wrapper} key={index}>
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
              </div>
            );
          })}
        </div>
        <img
          src="icons/fold-arrow.svg"
          alt={intl.messages.cards.previous}
          className={prevArrow}
          onClick={changeSelection(canPrev ? selected - 1 : selected)}
        />
        <img
          src="icons/fold-arrow.svg"
          alt={intl.messages.cards.next}
          className={nextArrow}
          onClick={changeSelection(canNext ? selected + 1 : selected)}
        />
      </div>
    </div>
  );
};

export default EducationCard;
