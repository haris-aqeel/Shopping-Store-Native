import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function AppBar({ navigation, name }) {
  return (
    <>
      <StatusBar backgroundColor="#6c757d" />

      <Box safeAreaTop backgroundColor="#212529" />

      <HStack
        bg="#212529"
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space={4} alignItems="center">
          <IconButton
            onPress={() => navigation.openDrawer()}
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          />
          <Text color="white" fontSize={20} fontWeight="bold">
            {name}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
