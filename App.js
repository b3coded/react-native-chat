/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, TouchableOpacity, Text, TextInput, View} from 'react-native';



export default class App extends Component{
  state = {
    phone: '',
    name: ''
  }

  onChange = key => val => {
    this.setState({[key]: val})
  }

  onSubmit = () => {
    const { phone, name } = this.state;
    if(phone.length < 10){
      Alert.alert("Error", "Wrong Phone Number");
    }else if(name.length < 3){
      Alert.alert("Error", "Wrong Name");
    }else{
      // TODO: Save user data with Async Storage
      Alert.alert(phone + "\n" + name);
    }
  }
  render() {
    const { phone, name } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.textLogo}>Chat</Text>
        <TextInput
        keyboardType="number-pad"
        placeholder="Phone number"
        style={styles.input}
        value={phone}
        onChangeText={this.onChange('phone')}
        />
        <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={this.onChange('name')}
        />
        <TouchableOpacity onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.text_btn}>Join!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F5FCFF',
    alignItems: "center",
    justifyContent: "center"
  },
  textLogo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#624CAB",
    marginBottom: 10
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#624CAB",
    borderRadius: 5,
  },
  text_btn: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});
