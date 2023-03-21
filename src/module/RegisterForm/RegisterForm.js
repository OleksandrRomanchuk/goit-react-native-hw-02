import CrossIcon from "../../img/svg/CrossIcon";
import Input from "../../components/Input/Input";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { initialCredentials } from "./initialCredentials";

import {
  formContainer,
  formTitle,
  avatarWrapper,
  avatar,
  avatarBG,
  avatarAddBtn,
  form,
  submitBtn,
  submitBtnText,
  loginText,
} from "./RegisterFormStyles";

const RegisterForm = ({ onFormSubmit }) => {
  const [isAvatarShown, setIsAvatarShown] = useState(false);
  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const avatarToggle = () => {
    setIsAvatarShown((state) => !state);
  };

  const onInputChange = (value) => {
    setUserCredentials((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    Keyboard.dismiss();

    if (
      !userCredentials.email ||
      !userCredentials.password ||
      !userCredentials.login
    ) {
      alert("All fields must be filled.");
      return;
    }

    if (userCredentials.login) setIsAvatarShown(false);

    onFormSubmit(userCredentials);
    setUserCredentials(initialCredentials);
  };

  return (
    <View style={formContainer}>
      <Text style={formTitle}>Реєстрація</Text>
      <View style={avatarWrapper}>
        <View style={avatarBG}>
          {isAvatarShown && (
            <Image style={avatar} source={require("../../img/userImage.jpg")} />
          )}
          <TouchableOpacity onPress={() => avatarToggle()} style={avatarAddBtn}>
            <CrossIcon isAvatarShown={isAvatarShown} />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={form}
      >
        <Input
          name="login"
          onInputChange={onInputChange}
          value={userCredentials.login}
          inputMode="text"
          placeholder="Логін"
        />
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
          <Text style={submitBtnText}>Зареєструватись</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={loginText}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegisterForm;
