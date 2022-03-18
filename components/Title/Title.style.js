import { StyleSheet, StatusBar as rnStatusBar, Platform } from "react-native";

const titleStyle = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});

export default titleStyle;
