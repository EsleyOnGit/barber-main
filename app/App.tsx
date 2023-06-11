import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./src/Home";
import DetailScreen from "./src/Detail";
import HeaderArea from "./src/MainTaab/HeaderArea";
import SearchScreen from "./src/Search";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

