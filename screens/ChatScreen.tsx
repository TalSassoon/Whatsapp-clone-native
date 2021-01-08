import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import NewMessageBotton from "../components/NewMessageBotton";
import chatRooms from "../data/ChatRooms";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageBotton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
