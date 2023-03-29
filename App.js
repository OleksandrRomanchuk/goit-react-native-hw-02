import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import RoutesStack from "./src/RoutesStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/img/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/img/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/img/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RoutesStack />
    </Provider>
  );
}
