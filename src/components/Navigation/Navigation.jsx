import React from 'react';

import {StyledNavLink, NavBox} from "./styled";

export function Navigation({tabs}) {
  return (
    <NavBox>
      {tabs.map(t => {
        return (
          <StyledNavLink to={t.path} key={t.path}><span>{t.title}</span></StyledNavLink>
        );
      })}
    </NavBox>
  );
}
