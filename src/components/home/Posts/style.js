import { StyleSheet } from "react-native";

export const postsStyle = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  wrapper: {
    marginTop: 20,
    // justifyContent: "spac ",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
    // display: "flex",
  },
  user: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    // display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    resizeMode: "contain",
    marginRight: 20,
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

  posts: {
    width: "100%",
    height: 300,
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 20,
    marginLeft: 23,
    // height: 30,
  },

  icon: {
    marginTop: 2,
  },

  bookmarkIcon: {
    marginRight: 20,
    marginTop: 2,
  },

  commentIcon: {
    transform: [{ rotateY: "180deg" }],
    marginLeft: 10,
    marginTop: 4,
  },
  send: {
    transform: [{ rotate: "-30deg" }],
    marginLeft: 10,
  },
  iconWrapper: {
    width: "100%",
    height: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  iconSaved: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 10,
  },

  likedCount: {
    color: "gray",
    marginTop: 15,
    marginLeft: 35,
  },
});
