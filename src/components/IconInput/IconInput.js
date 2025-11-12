import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--input-padding": 24 + "px",
    "--border-width": 1 + "px",
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--input-padding": 36 + "px",
    "--border-width": 2 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper width={width} style={styles}>
      <InputIcon
        id={icon}
        size={size === "small" ? 16 : 20}
        strokeWidth={size === "large" && 2}
      ></InputIcon>
      <Input placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--border-width) solid black;
  width: ${(p) => p.width + "px"};
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  color: inherit;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding-inline-start: var(--input-padding);
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    font-weight: 500;
  }

  &:focus {
    outline-offset: 4px;
  }

  ${Wrapper}:hover > & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
