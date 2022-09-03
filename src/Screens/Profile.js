import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useGlobalContext } from "../Function/Context";

const Profile = () => {
  const { handleLogout } = useGlobalContext();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={handleLogout}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
