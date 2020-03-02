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
          headerTitle: "home",
          headerLeft: () => (
            <View style={{ paddingLeft: 20 }}>
              <Icon
                name="menu"
                type="Feather"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </View>
          )
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
