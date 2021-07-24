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
  Spinner,
} from "native-base";
import CustomAuthentication from "../auth/customAuth";
import {Validate} from "../auth/customAuth";


export default function SignUp({ navigation }) {
  const [loader, setLoader] = useState(false);
  const [AuthDetails, setAuthDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    setLoader(true);
    if (AuthDetails.password === AuthDetails.confirmPassword) {
      CustomAuthentication(
        AuthDetails.email,
        AuthDetails.password,
        navigation,
        setLoader
      );
    } else {
      setLoader(false);
      Alert.alert('Password Not Matches');
    }
    setAuthDetails({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  if (loader) {
    return (
      <Center height={"100%"} width={"100%"}>
        <Spinner color="cyan" size="large" />
      </Center>
    );
  }

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
              onChangeText={(text) =>
                setAuthDetails({ ...AuthDetails, email: text })
              }
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
              onChangeText={(text) =>
                setAuthDetails({ ...AuthDetails, password: text })
              }
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
              onChangeText={(text) =>
                setAuthDetails({ ...AuthDetails, confirmPassword: text })
              }
            />
          </FormControl>
          <VStack space={2} mt={3}>
            <Button
              colorScheme="cyan"
              _text={{ color: "white" }}
              onPress={handleSubmit}
              disabled={!Validate(AuthDetails.email, AuthDetails.password, AuthDetails.confirmPassword)}
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
