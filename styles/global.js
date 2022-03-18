import { StyleSheet, StatusBar as rnStatusBar, Platform } from "react-native";

const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? rnStatusBar.currentHeight : 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#2E8B57",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export { global };
