import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./src/screens/IndexScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogger",
    },
  }
);

export default createAppContainer(navigator);
