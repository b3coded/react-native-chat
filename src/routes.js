import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
// importing Views
import Login from "./screens/Login";
import Home from "./screens/Home";
import CustomHeader from "./components/Header";
import Message from "./screens/Message";

// Routing
const _auth = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
            headerLeft: null
        }
    }
})
const _authContainer = createAppContainer(_auth);


const _main = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: props => <CustomHeader {...props} />,
            headerStyle: {
                backgroundColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",
                zIndex: 1,
                fontSize: 22,
                lineHeight: 23,
            },
            headerTintColor: "#fff",
            animationEnabled: true,
            headerTitle: "Home"
        }
    },
    Message: {
        screen: Message,
        navigationOptions: {
            header: props => <CustomHeader {...props} />,
            headerStyle: {
                backgroundColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",
                zIndex: 1,
                fontSize: 22,
                lineHeight: 23,
            },
            headerTintColor: "#fff",
            animationEnabled: true,
            headerTitle: "Contact Name"
        }
    }
})
const _mainContainer = createAppContainer(_main);


const _routes = createSwitchNavigator({
    Login: _authContainer,
    Main: _mainContainer
})

const Routes = createAppContainer(_routes);
export default Routes;