import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Field value={value} onChange={onChange}>
        {children}
      </Field>
      <FieldIcon id={"chevron-down"} size={20} strokeWidth={2}></FieldIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  padding-block: 12px;
  padding-inline: 16px;
  border-radius: 8px;
`;

const Field = styled.select`
  appearance: none;
  border: none;
  width: fit-content;
  margin-inline-end: 24px;
  background-color: transparent;
  color: ${COLORS.gray700};
`;

const FieldIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 11px;
  color: ${COLORS.gray700};
  }
`;

export default Select;
