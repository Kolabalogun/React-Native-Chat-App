import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useGlobalContext } from "../Function/Context";

const Home = () => {
  const { currentUser, navigation } = useGlobalContext();

  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <View>
          <Text style={styles.nameTxt}>Hello {currentUser?.displayName},</Text>
          <Text style={styles.AppTxt}>Your Messages</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
          <Image
            source={require("../../assets/file.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "aliceblue",

    flex: 1,
  },
  TopSection: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameTxt: {
    fontSize: 15,
    color: "rgb(100, 100, 100)",
    fontWeight: "500",
  },
  AppTxt: {
    fontSize: 16,
    fontWeight: "600",
  },
});
