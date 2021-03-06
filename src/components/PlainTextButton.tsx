import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Highlight = styled.Text`
  color: #5468ff;
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
`;

const Text = styled.Text`
  color: white;
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.button};
`;

export const PlainTextButton = (props: {
  onPress: any;
  text: string;
  highlightedText: string;
}) => {
  const { onPress, text, highlightedText } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        {text} <Highlight>{highlightedText}</Highlight>
      </Text>
    </TouchableOpacity>
  );
};
