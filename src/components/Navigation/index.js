import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {Button} from "../../UI/Button";

import styles from "./index.module.css";

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  color: #8d8d8d;
  transition: all 200ms ease-in;
`;

function Index({tabs}) {
  return (
    <div className={styles["nav-box"]}>
      {tabs.map(t => {
        return (
          <Button border={false}>
            <StyledNavLink activeClassName={styles.active} className={styles["nav-item"]} to={t.path} key={t.path}>{t.title}</StyledNavLink>
          </Button>
        );
      })}
    </div>
  );
}

export default Index;
