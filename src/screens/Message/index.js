import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Styles from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Message extends Component {
  state = {
    msg: ""
  };

  static navigationOptions = {
    headerTitle: "Contact Name"
  };

  render() {
    const { msg } = this.state;
    return (
      <View style={Styles.appContainer}>
        <View style={Styles.messageContainer} />
        <View style={Styles.messageControlls}>
          <View style={Styles.messageContainer}>
            <TextInput
              style={[Styles.input, Styles.roundedSm]}
              placeholder="Message here"
              value={msg}
              onChangeText={msg => this.setState({ msg })}
            />
          </View>
          <TouchableOpacity style={Styles.roundedButton}>
            <Text>
              <Icon size={22} name="comment" color="#FFF" solid />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
