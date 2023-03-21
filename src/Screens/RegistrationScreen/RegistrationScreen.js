import RegisterForm from "../../module/RegisterForm/RegisterForm";
import { View } from "react-native";

import { container } from "./RegistrationScreenStyles";

const RegistrationScreen = () => {
  const onFormSubmit = (userCredentials) => {
    console.log("userCredentials: ", userCredentials);
  };

  return (
    <View style={container}>
      <RegisterForm onFormSubmit={onFormSubmit} />
    </View>
  );
};

export default RegistrationScreen;
