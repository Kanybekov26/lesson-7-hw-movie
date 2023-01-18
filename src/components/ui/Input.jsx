import React, { forwardRef } from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items:center; */
  /* padding:10px; */
  /* padding-bottom:20px; */
  padding-top: 20px;
`;

const StyleLabel = styled.label`
  font-weight: bold;
  margin-left: 50px;
  padding-bottom: 10px;
`;

const StyleInput = styled.input`
  width: 400px;
  margin-left: 50px;
  border-radius: 5px;
`;

export const Input = forwardRef(({ inputtype, id, labelName }, ref) => {
  return (
    <StyleContainer>
      <StyleLabel htmlFor={id}>{labelName}</StyleLabel>
      <StyleInput type={inputtype} id={id} ref={ref}/>
    </StyleContainer>
  );
});
