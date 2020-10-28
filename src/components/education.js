import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import classnames from "classnames";
import moment from "moment";

import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import { clearName } from "../services/misc";
import IconsList from "./icons-list";

import css from "./css/education.module.css";

const getCardWidth = (windowSize) => {
  const width = windowSize.width;
  return width >= 1100 ? 650 : width >= 900 ? width * 0.6 : width * 0.95;
};

const getCardPosition = (width) => {
  const floor = Math.floor(width);
  return [0, floor, floor * 2];
};

const EducationCard = ({ education }) => {
  const [selected, setSelected] = useState(0);
  const [onCard, setOnCard] = useState();
  const [windowMode, setWindowMode] = useState("Desktop");
  const windowSize = useWindowSize();
  const scrollRef = useRef(null);
  const scrollPosition = useScrollPosition(scrollRef);

  useEffect(() => {
    setWindowMode(windowSize.width > 900 ? "Desktop" : "Mobile");
  }, [windowSize]);

  const changeSelection = (idx) => (e) => {
    const cardPosition = getCardPosition(getCardWidth(windowSize));
    scrollRef.current.scrollLeft = cardPosition[idx];
    setSelected(idx);
  };

  useEffect(() => {
    const leftPos = scrollPosition.left;
    const cardWidth = getCardWidth(windowSize);
    const cardPosition = getCardPosition(cardWidth);
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
  }, [scrollPosition, selected, onCard, windowSize]);

  const intl = useIntl();
  const schools = intl.messages.cards.educations;
  const isDesktop = windowMode === "Desktop";

  const prevArrow = classnames(css.arrow, css.prevArrow, {
    [css.disabled]: selected === 0,
  });
  const nextArrow = classnames(css.arrow, css.nextArrow, {
    [css.disabled]: selected === schools.length - 1,
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
        <div className={css.slides} ref={scrollRef}>
          {schools.map((school, index) => {
            const start = moment(school.date_start);
            const end = moment(school.date_end);

            const date = classnames(css.date, {
              [css.hide]: index !== onCard,
            });

            return (
              <div className={css.wrapper} key={index}>
                <div className={css.card}>
                  <div className={date}>
                    {start.format("MMM. YYYY") +
                      " - " +
                      end.format("MMM. YYYY")}
                  </div>
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
                      <IconsList icons={school.technologies} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {isDesktop && (
          <img
            src="icons/fold-arrow.svg"
            alt={intl.messages.cards.previous}
            className={prevArrow}
            onClick={changeSelection(selected - 1)}
          />
        )}
        {isDesktop && (
          <img
            src="icons/fold-arrow.svg"
            alt={intl.messages.cards.next}
            className={nextArrow}
            onClick={changeSelection(selected + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default EducationCard;
