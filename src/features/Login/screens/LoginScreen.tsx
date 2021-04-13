import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import { useForm, Controller } from "react-hook-form";

import { FormControl } from "../components/FormControl";
import { Button } from "./../components/Button";
import { TextButton } from "./../components/TextButton";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`};
  background-color: #181a20;
`;

const Header = styled.View`
  flex: 0.3;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.h4};
  color: white;
  padding-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  color: #7e8188;
  text-align: center;
`;

const Form = styled.View`
  flex: 0.4;
  padding: 15px;
`;

const Controls = styled.View`
  flex: 0.3;
  padding: 15px;
  align-items: center;
`;

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = handleSubmit(
    (data) => {
      setIsSubmitted(true);
      console.log(data);
    },
    (errors) => {
      setIsSubmitted(true);
      console.log("errors", errors);
    }
  );

  return (
    <SafeArea>
      <Header>
        <Title>Welcome</Title>
        <Subtitle>Please sign in to your account</Subtitle>
      </Header>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl
              placeHolder="Email Address"
              handleOnChange={(value: string) => onChange(value)}
              value={value}
              keyboardType="email-address"
              errors={errors.email}
            />
          )}
          name="email"
          rules={{
            required: "Email is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email.",
            },
          }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl
              placeHolder="Password"
              handleOnChange={(value: string) => onChange(value)}
              value={value}
              keyboardType="default"
              errors={errors.password}
              isPassword
            />
          )}
          name="password"
          rules={{
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must have a minimun of 6 characters",
            },
          }}
          defaultValue=""
        />
      </Form>
      <Controls>
        <Button backgroundColor="#5468ff" text="Sign In" onPress={onSubmit} />
        <View style={{ marginTop: 14 }} />
        <Button
          backgroundColor="#ffffff"
          color="#32363f"
          text="Sign In with Google"
          onPress={onSubmit}
        />
        <View style={{ marginTop: 20 }} />
        <TextButton
          onPress={() => {}}
          text="Don't have an account?"
          highlightedText="Sign up"
        />
      </Controls>
    </SafeArea>
  );
};
