import React from "react";
import { KeyboardTypeOptions } from "react-native";
import styled from "styled-components/native";
import { ErrorMessage } from "./ErrorMessage";

const Input = styled.TextInput`
  border-radius: 18px;
  width: 100%;
  height: 62px;
  background-color: #262a34;
  padding-left: 16px;
  font-family: ${(props: any) => props.theme.fonts.body};
  color: white;
  margin: 6px 0px;
  border: ${(props: any) => (props.haveError ? "1px solid red" : "none")};
`;

export const FormControl = (props: {
  placeHolder: string;
  value: string;
  handleOnChange: Function;
  keyboardType: KeyboardTypeOptions;
  isPassword: boolean;
  errors: { message: string };
}) => {
  const {
    placeHolder,
    value,
    handleOnChange,
    keyboardType,
    isPassword,
    errors,
  } = props;

  return (
    <>
      <Input
        placeholder={placeHolder}
        placeholderTextColor="#595b62"
        value={value}
        onChangeText={(text: string) => {
          handleOnChange(text);
        }}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        haveError={errors}
      />
      {errors ? <ErrorMessage message={errors.message} /> : null}
    </>
  );
};

FormControl.defaultProps = {
  isPassword: false,
};
