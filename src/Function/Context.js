import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LogBox } from "react-native";
import { auth } from "../Utils/Firebase";

const AppContext = createContext();

LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const AppProvider = ({ children }) => {
  const [currentUser, currentUserF] = useState(null);
  const [notification, notificationF] = useState("");

  const [rooms, setrooms] = [];

  //   notification
  useEffect(() => {
    const timeoutt = setTimeout(() => {
      notificationF("");
    }, 3000);

    return () => {
      clearInterval(timeoutt);
    };
  }, [notification]);

  // check if user is signed In
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUserF(user);
      } else {
        currentUserF(null);
      }
    });
  }, []);
  //   console.log(currentUser?.displayName);

  //   logging out user
  const handleLogout = () => {
    signOut(auth).then(() => {
      currentUserF(null);
    });
  };

  const navigation = useNavigation();

  return (
    <AppContext.Provider
      value={{
        currentUser,
        notification,
        notificationF,
        handleLogout,
        rooms,
        setrooms,
        navigation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
