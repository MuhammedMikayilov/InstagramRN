import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    display: "flex",
  },

  logo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
  },

  dmIcon: {
    width: 50,
    height: 50,
    position: "relative",
    padding: 20,
  },

  notificationWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    padding: 2,
    borderRadius: 100,
    width: 25,
    height: 25,
    lineHeight: 20,
  },
  notification: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
