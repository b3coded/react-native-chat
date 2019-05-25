import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";


const CustomHeader = props => {
    return (
      <View
        style={{
          height: 56,
          backgroundColor: "#624CAB"
        }}
      >
          <Header {...props} />
      </View>
    );
  };
  
export default CustomHeader;