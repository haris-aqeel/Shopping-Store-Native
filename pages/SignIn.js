import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  Center,
  Heading,
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from "native-base";

export default function SignIn() {
  return (
    <Center height={"100%"} width={"100%"}>
      <Box p={3} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={1} mt={7}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Email ID
            </FormControl.Label>
            <Input type="email" />
          </FormControl>
          <FormControl mb={6}>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input type="password" />

            <Link
              _text={{ fontSize: "xs", fontWeight: "700", color: "cyan.500" }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link>
          </FormControl>
          <VStack space={2}>
            <Button colorScheme="cyan" _text={{ color: "white" }}>
              Login
            </Button>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={600}>
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{ color: "cyan.500", bold: true, fontSize: "sm" }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
