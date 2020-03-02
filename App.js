import React, { Component } from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionSpecs,
  TransitionPresets
} from "@react-navigation/stack";
import {
  createDrawerNavigator,
  useIsDrawerOpen
} from "@react-navigation/drawer";
import Home from "./src/screens/Home";
import { Icon } from "native-base";
import About from "./src/screens/About";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator(props) {
  const drawwer = useIsDrawerOpen();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
        gestureEnabled: false
      }}
      headerMode="float"
    >
      <Stack.Screen
        options={{
          headerTitle: "Mukhlis Team",
          headerLeft: () => (
            <View style={{ paddingLeft: 20 }}>
              <Icon
                name="menu"
                type="Feather"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ paddingRight: 20, flexDirection: "row" }}>
              <Icon
                name="logo-whatsapp"
                onPress={() => props.navigation.toggleDrawer()}
                style={{
                  marginRight: 20,
                  color: "#60C659"
                }}
              />
              <Icon
                name="logo-youtube"
                onPress={() => props.navigation.toggleDrawer()}
                style={{ color: "#FF2500" }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#AADCF7",
            shadowColor: "rgba(0,0,0,0)",
            elevation: 0
          }
        }}
        initialParams={{ drawer: drawwer }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerTitle: "About"
        }}
        name="About"
        component={About}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide">
        <Drawer.Screen name="Main" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default class App extends Component {
  render() {
    return <DrawerNavigator />;
  }
}
