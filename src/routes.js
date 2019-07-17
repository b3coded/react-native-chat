import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome5";

// importing Views
import Login from "./screens/Login";
import Drawer from "./components/Drawer";

// Routing
const _auth = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  }
});

const _authContainer = createAppContainer(_auth);

const _routes = createSwitchNavigator({
  Login: _authContainer,
  Main: Drawer
});

const Routes = createAppContainer(_routes);
export default Routes;
