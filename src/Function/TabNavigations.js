import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import Photo from "../Screens/Photo";
import { MaterialIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Messages") {
            iconName = "message";
            (size = focused ? 26 : 21),
              (color = focused ? "aliceblue" : "rgb(205, 205, 210)");
          } else if (route.name === "Camera") {
            iconName = "camera";
            (size = focused ? 26 : 23),
              (color = focused ? "aliceblue" : "rgb(205, 205, 210)");
          } else if (route.name === "Profile") {
            iconName = "person";
            (size = focused ? 26 : 21),
              (color = focused ? "aliceblue" : "rgb(205, 205, 210)");
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor: "black",
          elevation: 0,
          margin: 20,
          borderRadius: 30,
          paddingHorizontal: 10,
          position: "absolute",
        },
        tabBarLabelStyle: {
          color: "white",
          padding: 3,
        },
        headerShown: false,
      })}
      initialRouteName="Messages"
    >
      <Tabs.Screen name="Messages" component={Home} />
      <Tabs.Screen name="Camera" component={Photo} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default TabNavigations;

const styles = StyleSheet.create({});
