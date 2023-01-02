import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  header: {
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
  },
  inputContainer: {
    paddingRight: 24,
    paddingLeft: 24,
    position: 'absolute',
    top: 142,
    // backgroundColor: 'green',
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#808080',
    borderRadius: 5,
    color: '#f2f2f2',
    padding: 16,
    flex: 1,
    marginRight: 5,
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    padding: 18,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xablau: {color: 'white'},
});
