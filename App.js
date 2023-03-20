import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/img/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/img/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    fontFamily: "Roboto",
    fontSize: 16,
    color: "#212121",
  },
});
