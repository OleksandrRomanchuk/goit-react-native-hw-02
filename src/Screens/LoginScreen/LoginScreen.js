import LoginForm from "../../module/LoginForm/LoginForm";
import { View } from "react-native";

import { container } from "./LoginScreenStyles";

const LoginScreen = () => {
  const onFormSubmit = (userCredentials) => {
    console.log("userCredentials: ", userCredentials);
  };

  return (
    <View style={container}>
      <LoginForm onFormSubmit={onFormSubmit} />
    </View>
  );
};

export default LoginScreen;
