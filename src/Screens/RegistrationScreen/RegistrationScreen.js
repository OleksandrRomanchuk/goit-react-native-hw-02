import RegisterForm from "../../module/RegisterForm/RegisterForm";
import { ImageBackground, View } from "react-native";

import { container, bgImage } from "./RegistrationScreenStyles";

const RegistrationScreen = () => {
  const onFormSubmit = (userCredentials) => {
    console.log("userCredentials: ", userCredentials);
  };

  return (
    <View style={container}>
      <ImageBackground
        source={require("../../img/authBackground.jpg")}
        style={bgImage}
      >
        <RegisterForm onFormSubmit={onFormSubmit} />
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
