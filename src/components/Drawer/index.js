import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import Home from "../../screens/Home";
import Message from "../../screens/Message";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.toggleDrawer.bind(this)}
          style={{ padding: 20 }}
        >
          <Text>
            <Icon name="bars" size={25} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const _HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#624CAB"
      },
      headerTintColor: "#fff"
    })
  }
});

const Drawer = createDrawerNavigator({
  Home: {
    screen: _HomeStack
  },
  Message: {
    screen: Message
  }
});

export default createAppContainer(Drawer);
