import React from "react";
import { NativeBaseProvider } from "native-base";
import NavigationBar from "./navigationBar.js";
import firebaseConfig from "./Config.js";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <NativeBaseProvider>
      <NavigationBar />
    </NativeBaseProvider>
  );
}

export default App;
