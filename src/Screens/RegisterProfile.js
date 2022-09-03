import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../Utils/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useGlobalContext } from "../Function/Context";

import { pickImage, uploadImgetoFireStorage } from "../Utils/DisplayImage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Loader from "../Components/Loader";

const RegisterProfile = ({ navigation }) => {
  const { notification, notificationF } = useGlobalContext();

  const [name, nameF] = useState("");

  const [selectedImage, selectedImageF] = useState(null);

  const [loading, setloading] = useState(null);

  async function handlePicture() {
    if (name && selectedImage) {
      setloading(true);
      const user = auth.currentUser;
      let photoURL;
      if (selectedImage) {
        const { url } = await uploadImgetoFireStorage(
          selectedImage,
          `images/${user.uid}`,
          "profilePicture"
        );
        photoURL = url;
      }
      const userData = {
        displayName: name,
        email: user.email,
      };
      if (photoURL) {
        userData.photoURL = photoURL;
      }

      await Promise.all([
        updateProfile(user, userData),
        setDoc(doc(db, "users", user.uid), { ...userData, uid: user.uid }),
      ]);
      setloading(false);
      navigation.navigate("TabNavigations");
    } else {
      notificationF("All Fields must be fiiled");
    }
  }

  const Imagepicker = async () => {
    let result = await pickImage();
    if (!result.cancelled) {
      selectedImageF(result.uri);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topSection}>
              <Text style={styles.topText}>Finish your profile</Text>
              <Text style={styles.capText}>
                Connect with each other. Enjoy safe and private texting
              </Text>
            </View>

            <KeyboardAvoidingView style={styles.Inputs}>
              <TouchableOpacity
                onPress={Imagepicker}
                style={{
                  height: 120,
                  width: 120,

                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",

                  borderRadius: 120,
                }}
              >
                {!selectedImage ? (
                  <View style={{ alignSelf: "center" }}>
                    <Image
                      source={require("../../assets/photo.png")}
                      style={{
                        height: 120,
                        width: 120,
                      }}
                    />
                    <Text>Add Display Picture</Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: selectedImage }}
                    style={{
                      height: "100%",
                      width: "100%",

                      borderRadius: 120,
                    }}
                  />
                )}
              </TouchableOpacity>

              <View style={{ marginTop: 10 }}>
                <Text style={{ paddingVertical: 3, fontWeight: "600" }}>
                  Your Name
                </Text>
                <TextInput
                  value={name}
                  onChangeText={(e) => nameF(e)}
                  placeholder="Enter your name"
                  style={styles.Input}
                />
              </View>
            </KeyboardAvoidingView>
            <Text style={{ color: "red", alignSelf: "center", padding: 3 }}>
              {notification}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handlePicture}>
              <Text style={styles.btnTxt}>Upload Details</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default RegisterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "aliceblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "aliceblue",
    padding: 20,
  },
  topSection: {
    paddingTop: 15,
  },
  topText: {
    fontWeight: "700",
    fontSize: 25,

    color: "rgb(7, 1, 57)",
    marginTop: 20,
  },
  capText: {
    color: "rgb(100, 100, 100)",
    marginTop: 10,
  },

  Inputs: {
    marginTop: 20,
  },
  Input: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 15,
    borderColor: "#aaa",
  },
  btn: {
    paddingVertical: 12,
    backgroundColor: "rgb(20, 119, 251)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    marginVertical: 20,
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
