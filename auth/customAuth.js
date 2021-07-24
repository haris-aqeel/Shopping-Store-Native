import { Alert } from "react-native";
import * as firebase from "firebase";

function CustomAuthentication(email, password, navigation, setLoader) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      setLoader(false);
      navigation.navigate("SignIn");
    })
    .catch((error) => {
      var errorMessage = error.message;
      setLoader(false);
      Alert.alert(errorMessage);
    });
}

export function Validate (email, password, confirmPassword) {
    return email !== "" && password === confirmPassword && password !== ""
}

export default CustomAuthentication;
