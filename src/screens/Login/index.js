import React, { Component } from "react";
import {
  Platform,
  Stylesheet,
  Alert,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from "react-native";
import { Container, Title, Input, Button, TextButton } from "./styles";
//import Styles from '../../styles';

export default class Login extends Component {
  state = {
    phone: "",
    name: ""
  };

  onChange = key => val => {
    this.setState({ [key]: val });
  };

  onSubmit = () => {
    // TODO: Save user data with Async Storage
    // Alert.alert(phone + "\n" + name);
    this.props.navigation.navigate("Home");
  };
  render() {
    const { phone, name } = this.state;

    return (
      <Container>
        <Title>Chat</Title>
        <Input
          keyboardType="number-pad"
          placeholder="Phone number"
          value={phone}
          onChangeText={this.onChange("phone")}
        />
        <Input
          placeholder="Name"
          value={name}
          onChangeText={this.onChange("name")}
        />
        <Button onPress={this.onSubmit}>
          <TextButton>Join!</TextButton>
        </Button>
      </Container>
    );
  }
}
