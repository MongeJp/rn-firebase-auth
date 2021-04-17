import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import { useForm, Controller } from "react-hook-form";
import auth from "@react-native-firebase/auth";

import { FormControl } from "../../../components/FormControl";
import { Button } from "../../../components/Button";
import { PlainTextButton } from "../../../components/PlainTextButton";

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

export const RegisterScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = handleSubmit(
    ({ email, password }) => {
      setIsSubmitted(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("User account created & signed in!");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error(error);
        });
    },
    (errors) => {
      setIsSubmitted(true);
      console.log("errors", errors);
    }
  );

  return (
    <SafeArea>
      <Header>
        <Title>Create new account</Title>
        <Subtitle>Please fill in the form to continue</Subtitle>
      </Header>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
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
          render={({ field: { onChange, value } }) => (
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
        <Button backgroundColor="#5468ff" text="Sign Up" onPress={onSubmit} />
        <View style={{ marginTop: 20 }} />
        <PlainTextButton
          onPress={() => navigation.navigate("Login")}
          text="Have an Account?"
          highlightedText="Sign in"
        />
      </Controls>
    </SafeArea>
  );
};
