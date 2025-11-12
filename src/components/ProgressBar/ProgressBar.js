/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--padding": 0,
    "--radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0,
    "--radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--radius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <BarWrapper
        role={"progressbar"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <ProgressWrapper value={value}>
          <ProgressIndicator value={value}></ProgressIndicator>
        </ProgressWrapper>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  line-height: 0;
`;

const BarWrapper = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const ProgressWrapper = styled.svg`
  width: 100%;
  height: 100%;
  border-radius: 4px 0 0 4px;
`;

const ProgressIndicator = styled.rect`
  width: ${(p) => p.value}%;
  height: 100%;
  stroke: ${COLORS.primary};
  fill: ${COLORS.primary};
`;

export default ProgressBar;
