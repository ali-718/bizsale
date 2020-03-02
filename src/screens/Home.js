import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  useIsDrawerOpen
} from "@react-navigation/drawer";

function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text> textInComponent </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
