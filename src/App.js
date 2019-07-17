import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Styles from "./styles";
import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <View style={Styles.appContainer}>
        <StatusBar backgroundColor="#624CAB" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}
