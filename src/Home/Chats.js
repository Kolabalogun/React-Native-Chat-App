import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { auth, db } from "../Utils/Firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { useGlobalContext } from "../Function/Context";

const Chats = () => {
  const { rooms, setrooms } = useGlobalContext();

  const { currentUser } = auth;

  const chatsQuery = query(
    collection(db, "rooms"),
    where("participantArray", "array-contains", currentUser.email)
  );

  useEffect(() => {
    const unsub = onSnapshot(chatsQuery, (querySnapshot) => {
      const parsedChats = querySnapshot.docs
        .filter((doc) => doc.data().lastMessage)
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          userB: doc
            .data()
            .participants.find((p) => p.email !== currentUser.email),
        }));

      setrooms(parsedChats);
    });

    return () => unsub();
  }, []);

  return (
    <View>
      <Text>Chats</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
