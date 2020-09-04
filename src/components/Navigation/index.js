import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "./index.module.css";

function Index({tabs}) {
  console.log(styles)
  return (
    <div className={styles["nav-box"]}>
      {tabs.map(t => {
        return <NavLink className={styles["nav-item"]} to={t.path} key={t.path}>{t.title}</NavLink>
      })}
    </div>
  );
}

export default Index;
