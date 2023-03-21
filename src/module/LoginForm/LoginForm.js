import Input from "../../components/Input/Input";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { initialCredentials } from "./initialCredentials";

import {
  formContainer,
  formTitle,
  form,
  submitBtn,
  submitBtnText,
  loginText,
} from "./LoginFormStyles";

const LoginForm = ({ onFormSubmit }) => {
  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const onInputChange = (value) => {
    setUserCredentials((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    Keyboard.dismiss();

    if (!userCredentials.email || !userCredentials.password) {
      alert("All fields must be filled.");
      return;
    }

    onFormSubmit(userCredentials);
    setUserCredentials(initialCredentials);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={form}
    >
      <View style={formContainer}>
        <Text style={formTitle}>Увійти</Text>
        <Input
          onInputChange={onInputChange}
          name="email"
          value={userCredentials.email}
          inputMode="email"
          keyboardType="email-address"
          placeholder="Адреса електронної пошти"
        />
        <Input
          onInputChange={onInputChange}
          name="password"
          value={userCredentials.password}
          placeholder="Пароль"
        />
        <TouchableOpacity onPress={formSubmitHandler} style={submitBtn}>
          <Text style={submitBtnText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={loginText}>Немає акаунту? Зареєструватись</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
