
import React, {Component} from 'react';
import {Platform, Stylesheet, Alert, TouchableOpacity, Text, TextInput, View} from 'react-native';
import Styles from '../../styles';

export default class Login extends Component{
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
      // Alert.alert(phone + "\n" + name);
      this.props.navigation.navigate("Home");
    }
  }
  render() {
    const { phone, name } = this.state;

    return (
      <View style={[Styles.container, Styles.centerContent]}>
        <Text style={Styles.textLogo}>Chat</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Phone number"
          style={Styles.input}
          value={phone}
          onChangeText={this.onChange('phone')}
        />
        <TextInput
          placeholder="Name"
          style={Styles.input}
          value={name}
          onChangeText={this.onChange('name')}
        />
        <TouchableOpacity onPress={this.onSubmit} style={Styles.button}>
          <Text style={Styles.text_btn}>Join!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
