import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  touchableContainer: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    color: "#F2F2F2",
    flex: 1,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#4ea8de",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#5e60ce",
    borderColor: "transparent",
  }
});
