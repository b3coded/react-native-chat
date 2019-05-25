import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Styles from '../../styles';
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Message extends Component{
    render(){
        return (
            <View style={Styles.appContainer}>
                
                <View style={Styles.messageContainer}>

                </View>
                <View style={Styles.messageControlls}>
                    <View style={Styles.messageContainer}>
                        <TextInput
                            style={[Styles.input, Styles.roundedSm]}
                            placeholder="Message here"
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