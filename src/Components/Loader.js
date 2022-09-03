import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
