import { StyleSheet } from "react-native";

export const storiesStyle = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  story: {
    width: "100%",
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    overflow: "hidden",
    resizeMode: "contain",
  },

  username: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
  },

  usersStory: {
    width: 80,
    marginLeft: 20,
  },
});
