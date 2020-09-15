import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {layout} from "../uiConstants";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-bottom: ${layout.spacing.primary};
`;

const CardTitle = styled.div`
  padding: 15px ${layout.spacing.primary} 10px ${layout.spacing.primary};
  font-size: 13px;
  line-height: 14px;
  color: #a8a8a8;
`;

const CardContent = styled.div`
  padding-bottom: 10px;
`;

export function Card({children, title, ...rest}) {
  return (
    <CardContainer {...rest}>
      {title?<CardTitle>{title}</CardTitle>:null}
      <CardContent>{children}</CardContent>
    </CardContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string
};

Card.defaultProps = {
  title: null,
};
