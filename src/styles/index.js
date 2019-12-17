import { StyleSheet, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#343a40",
    alignItems: "center",
    justifyContent: "center"
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "900",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10
  },
  splashContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  imageContainer: {
    flex: 1,
    width: 500,
    height: 100,
    left: 0,
  },
  mainSplashContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button2: {
    backgroundColor: "#ffa200",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'gray',
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: height-745,
    zIndex:100,
    left: width/2-20,
  }
});
