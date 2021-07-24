import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NativeRouter, Route, Link } from "react-router-native";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </NativeRouter>
  );
}

export default App;
