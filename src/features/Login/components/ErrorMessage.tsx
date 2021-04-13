import React from "react";
import styled from "styled-components/native";

const Message = styled.Text`
  color: #fb5e51;
  text-align: center;
  padding: 5px 0px;
`;

export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};
