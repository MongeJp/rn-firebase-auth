import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";

import { AuthContext } from "../navigation/AuthNavigator";

const Container = styled.View`
  flex: 1;
  background-color: #181a20;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  background-color: #181a20;
  color: white;
  border: 1px solid white;
  padding: 8px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const HomeScreen = () => {
  const user = useContext(AuthContext);

  const logOut = () => {
    console.log('xd');
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  return (
    <Container>
      <Title>Welcome {user.email}</Title>
      <Button onPress={logOut}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};
