import React from "react";

import { clearName, isPng } from "../services/misc";
import css from "./css/icons-list.module.css";

const IconsList = ({ icons }) => {
  return (
    <div className={css.iconsList}>
      {icons.map((tech, index) => {
        const techname = clearName(tech);
        const fileName =
          "icons/tech/" + techname + (isPng(techname) ? ".png" : ".svg");
        return (
          <div className={css.iconContainer} key={index}>
            <img src={fileName} alt="" className={css.icons} />
            <p className={css.iconText}>{tech}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IconsList;
