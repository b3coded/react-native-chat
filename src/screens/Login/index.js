import React, { useState } from "react";
import { Container, Title, Input, Button, TextButton } from "./styles";

export default function Login (props) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  function handlePhone(val) {
    setPhone(val);
  }

  function handleName(val) {
    setName(val);
  }

  function onSubmit () {;
    props.navigation.navigate("Home");
  }
  

  return (
    <Container>
      <Title>Chat</Title>
      <Input
        keyboardType="number-pad"
        placeholder="Phone number"
        value={phone}
        onChangeText={handlePhone}
      />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={handleName}
      />
      <Button onPress={onSubmit}>
        <TextButton>Join!</TextButton>
      </Button>
    </Container>
  );
}
