import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Center,
  Heading,
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Link,
  Text,
} from "native-base";
import * as firebase from 'firebase';

export default function SignUp() {
  const [AuthDetails, setAuthDetails] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })


  const handleSubmit = () => {
    console.log(AuthDetails.email, AuthDetails.password,  AuthDetails.confirmPassword);
    if (AuthDetails.password === AuthDetails.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(AuthDetails.email, AuthDetails.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
           console.log(user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
    }
  };

  return (
    <Center height={"100%"} width={"100%"}>
      <Box p={2} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={1} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Email
            </FormControl.Label>
            <Input
              type="email"
              value={AuthDetails.email}
              onChangeText={text => setAuthDetails({...AuthDetails, email: text})}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input
              type="password"
              name="password"
              value={AuthDetails.password}
              onChangeText={text=> setAuthDetails({...AuthDetails, password: text})}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Confirm Password
            </FormControl.Label>
            <Input
              type="password"
              name="confirmpassword"
              value={AuthDetails.confirmPassword}
              onChangeText={text => setAuthDetails({...AuthDetails, confirmPassword: text})}
            />
          </FormControl>
          <VStack space={2} mt={3}>
            <Button
              colorScheme="cyan"
              _text={{ color: "white" }}
              onPress={handleSubmit}
            >
              SignUp
            </Button>
          </VStack>
          <HStack justifyContent="center" mt={2}>
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Already a User{" "}
            </Text>
            <Link
              _text={{ color: "cyan.500", bold: true, fontSize: "sm" }}
              to={"SignIn"}
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
