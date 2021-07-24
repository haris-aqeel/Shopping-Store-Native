import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Drawer = createDrawerNavigator();
const options= {
  swipeEnabled: false,
}

function AppBar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SignUp" edgeWidth={0}>
      <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={options}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={options}
          
        />
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={options}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppBar;
