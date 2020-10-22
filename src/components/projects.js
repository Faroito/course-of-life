import React, { useState } from "react";
import { useIntl } from "react-intl";

import IconsList from "./icons-list";

import classnames from "classnames";
import css from "./css/projects.module.css";

const Projects = ({ projectPage }) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState(0);

  const onOpen = (status) => (e) => {
    setOpen(status);
  };

  const onSelected = (index) => (e) => {
    setSelected(index);
    setDemo(false);
  };

  const toggleDemo = () => (e) => {
    setDemo(!demo);
  };

  const button = classnames(css.button, { [css.hide]: open });
  const background = classnames(css.background, {
    [css.extendedBackground]: open,
  });

  const projects = intl.messages.cards.projects;

  return (
    <div className={css.projectsPage} ref={projectPage}>
      <div className={background}>
        <div className={button} onClick={onOpen(true)}>
          {intl.messages.body.projects_button}
        </div>
        {open && <h2 className={css.title}>{intl.messages.body.projects}</h2>}
        {open && (
          <div className={css.projectScreen}>
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
            <div className={css.line} />
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
                  <div className={css.technologiesWrapper}>
                    <span>{intl.messages.cards.technologies_used}</span>
                    <IconsList icons={projects[selected].technologies} />
                  </div>
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
