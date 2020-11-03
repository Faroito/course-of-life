import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";

import IconsList from "./icons-list";
import useWindowSize from "../hooks/useWindowSize";

import classnames from "classnames";
import css from "./css/projects.module.css";

const Projects = ({ projectPage }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState(0);
  const [windowMode, setWindowMode] = useState("Desktop");
  const windowSize = useWindowSize();

  useEffect(() => {
    setWindowMode(windowSize.width > 900 ? "Desktop" : "Mobile");
  }, [windowSize]);

  const onOpen = (status) => (e) => {
    setOpen(status);
  };

  const onSelected = (index) => (e) => {
    setSelected(index);
    setDemo(false);
  };

  const setNext = (dir) => (e) => {
    const next = selected + dir;
    const len = projects.length;
    setSelected(next < 0 ? len - 1 : next >= len ? 0 : next);
    setDemo(false);
  };

  const toggleDemo = () => (e) => {
    setDemo(!demo);
  };

  const button = classnames(css.button, { [css.hide]: open });
  const background = classnames(css.background, {
    [css.extendedBackground]: open,
  });
  const projectScreen = classnames(css.projectScreen, {
    [css.projectScreenHide]: !open,
  });

  const projects = intl.messages.cards.projects;
  const isDesktop = windowMode === "Desktop";

  return (
    <div className={css.projectsPage} ref={projectPage}>
      <div className={background}>
        <div className={button} onClick={onOpen(true)}>
          {intl.messages.body.projects_button}
        </div>
        {open && <h2 className={css.title}>{intl.messages.body.projects}</h2>}
        <div className={projectScreen}>
          {isDesktop && (
            <div className={css.menu}>
              {projects.map((project, index) => {
                const buttonMenu = classnames(css.buttonMenu, {
                  [css.buttonMenuSelected]: index === selected,
                });
                return (
                  <div
                    className={buttonMenu}
                    onClick={onSelected(index)}
                    key={index}
                  >
                    <span>{project.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          {isDesktop && <div className={css.line} />}
          {!isDesktop && (
            <img
              src="icons/fold-arrow.svg"
              alt={intl.messages.cards.next}
              className={css.next}
              onClick={setNext(-1)}
            />
          )}
          {open && (
            <div className={css.presentation}>
              {!demo && (
                <div>
                  <div>
                    <div className={css.projectName}>
                      {projects[selected].name}
                    </div>
                    <span className={css.projectTitle}>
                      {projects[selected].title}
                    </span>
                  </div>
                  <div className={css.description}>
                    {projects[selected].description.map((desc, index) => {
                      return (
                        <p key={index}>
                          {desc}
                          <br />
                        </p>
                      );
                    })}
                  </div>
                  <div className={css.demo}>
                    <span onClick={toggleDemo()}>
                      {intl.messages.cards.see_demo}
                    </span>
                    <a
                      className={css.icon}
                      href={projects[selected].link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="icons/github.svg"
                        alt="github"
                        className={css.logo}
                      />
                    </a>
                  </div>
                  <IconsList icons={projects[selected].technologies} />
                </div>
              )}
              {demo && (
                <div
                  className={css.demoTV}
                  onClick={toggleDemo()}
                  style={{
                    "background-image": "url(" + projects[selected].gif + ")",
                    "background-size": "cover",
                  }}
                ></div>
              )}
            </div>
          )}
          {!isDesktop && (
            <img
              src="icons/fold-arrow.svg"
              alt={intl.messages.cards.next}
              className={css.next}
              style={{ transform: "rotate(180deg)" }}
              onClick={setNext(1)}
            />
          )}
          <img
            src="icons/close.svg"
            alt={intl.messages.cards.close}
            className={css.close}
            onClick={onOpen(false)}
          />
        </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
