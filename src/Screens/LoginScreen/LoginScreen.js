import LoginForm from "../../module/LoginForm/LoginForm";
import { ImageBackground, View } from "react-native";

import { container, bgImage } from "./LoginScreenStyles";

const LoginScreen = () => {
  const onFormSubmit = (userCredentials) => {
    console.log("userCredentials: ", userCredentials);
  };

  return (
    <View style={container}>
      <ImageBackground
        source={require("../../img/authBackground.jpg")}
        style={bgImage}
      >
        <LoginForm onFormSubmit={onFormSubmit} />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
