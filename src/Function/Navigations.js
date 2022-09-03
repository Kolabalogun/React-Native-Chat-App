import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import WelcomePage from "../Screens/WelcomePage";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { useGlobalContext } from "./Context";
import Home from "../Home/Home";
import TabNavigations from "./TabNavigations";
import RegisterProfile from "../Screens/RegisterProfile";
import Contact from "../Home/Contact";

const Stack = createStackNavigator();

const Navigations = () => {
  const { currentUser } = useGlobalContext();

  return (
    <>
      {currentUser ? (
        <Stack.Navigator initialRouteName="TabNavigations">
          {!currentUser.displayName && (
            <Stack.Screen
              name="RegisterProfile"
              options={{ headerShown: false }}
              component={RegisterProfile}
            />
          )}
          <Stack.Screen
            name="TabNavigations"
            options={{ headerShown: false }}
            component={TabNavigations}
          />
          <Stack.Screen
            name="Contact"
            options={{ title: "Select Contacts" }}
            component={Contact}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="WelcomePage"
        >
          <Stack.Screen
            name="WelcomePage"
            options={{ headerShown: false }}
            component={WelcomePage}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
