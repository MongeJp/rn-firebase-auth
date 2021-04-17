import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CustomButton = styled.TouchableOpacity`
  font-size: ${(props: any) => props.theme.fontSizes.button};
  width: 100%;
  height: 62px;
  justify-content: center;
  border-radius: 18px;
`;

const Content = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.button};
  text-align: center;
`;

export const Button = ({ onPress, backgroundColor, color = "white", text }) => {
  return (
    <CustomButton style={{ backgroundColor }} onPress={onPress}>
      <Content style={{ color }}>{text}</Content>
    </CustomButton>
  );
};
