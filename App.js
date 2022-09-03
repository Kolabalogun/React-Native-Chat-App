import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./src/Function/Context";

import Navigations from "./src/Function/Navigations";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Navigations />
      </AppProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
