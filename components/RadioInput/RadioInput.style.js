import { StyleSheet, StatusBar as rnStatusBar, Platform } from "react-native";

const radioInputStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 20,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxDot: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  textContainer: {
    // width: 100,
  },
  text: {
    textTransform: "capitalize",
  },
  textLineThrough: {
    textDecorationLine: "line-through",
  },
});

export default radioInputStyle;
