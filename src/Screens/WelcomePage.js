import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const WelcomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopSection}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/n.png")}
            style={{ height: 30, width: 30 }}
          />
          <Text style={styles.logoTxt}>KChat</Text>
        </View>
        <View style={styles.icons}>
          {/* <Image
            source={require("../../assets/icons/chat.png")}
            style={{ height: 70, width: 70, position: "absolute", left: 30 }}
          />
          <Image
            source={require("../../assets/icons/speak.png")}
            style={{ height: 70, width: 70, position: "absolute", right: 30 }}
          />
          <Image
            source={require("../../assets/icons/b.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              top: "30%",
              left: "40%",
            }}
          />
          <Image
            source={require("../../assets/icons/c.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              right: "10%",
              top: "50%",
            }}
          />
          <Image
            source={require("../../assets/icons/d.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              bottom: 150,
              left: 40,
            }}
          /> */}
          <View
            style={{
              flexDirection: "row",

              padding: 10,
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("../../assets/people/a.png")}
              style={{
                height: 160,
                width: 160,
                backgroundColor: "rgb(10, 0, 87)",

                borderBottomRightRadius: 80,
                borderTopLeftRadius: 80,
                borderTopRightRadius: 80,
              }}
            />
            <Image
              source={require("../../assets/people/b.png")}
              style={{
                height: 160,
                width: 160,
                backgroundColor: "rgb(112, 62, 254)",

                borderRadius: 80,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",

              padding: 10,
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("../../assets/people/d.png")}
              style={{
                height: 160,
                width: 160,
                backgroundColor: "rgb(112, 62, 254)",
                borderRadius: 80,
              }}
            />
            <Image
              source={require("../../assets/people/e.png")}
              style={{
                height: 160,
                width: 160,
                backgroundColor: "rgb(10, 0, 87)",

                borderBottomRightRadius: 80,
                borderTopLeftRadius: 80,
                borderTopRightRadius: 80,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.BottomSection}>
        <Text style={styles.topText}>
          Enjoy the new experience of chatting with friends all around the World
        </Text>
        <Text style={styles.capText}>
          Connect with each other. Enjoy safe and private texting
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.btnTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "aliceblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  TopSection: {
    flex: 2.5,
    backgroundColor: "rgb(20, 119, 251)",
  },
  BottomSection: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
    alignItems: "center",
    padding: 20,
  },
  topText: {
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
    color: "rgb(7, 1, 57)",
    marginTop: 20,
  },
  capText: {
    color: "rgb(124, 124, 124)",
    marginTop: 10,
  },
  btn: {
    paddingVertical: 16,
    backgroundColor: "rgb(20, 119, 251)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "100%",
    marginTop: 60,
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoTxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    paddingHorizontal: 5,
  },
  icons: {
    height: "100%",
    marginTop: 30,
  },
});
