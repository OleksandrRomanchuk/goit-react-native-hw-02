import CrossIcon from "../../img/svg/CrossIcon";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { initialCredentials } from "./initialCredentials";
import { onInputFocus } from "../../helpers/inputFocusFunc";

import {
  formContainer,
  formTitle,
  form,
  inputWrapper,
  input,
  inputPositioning,
  showPassBtn,
  showPassBtnTxt,
  submitBtn,
  submitBtnText,
  loginText,
} from "./LoginFormStyles";

const LoginForm = ({ onFormSubmit }) => {
  const [focusedInputName, setFocusedInputName] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);
  const [inputBtnText, setInputBtnText] = useState("Показати");
  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const avatarToggle = () => {
    setIsAvatarShown((state) => !state);
  };

  const onInputChange = (value) => {
    setUserCredentials((state) => ({ ...state, ...value }));
  };

  const onShowBtnPress = () => {
    setIsPassShown((state) => !state);
    setInputBtnText((state) => {
      if (state === "Приховати") return "Показати";
      if (state === "Показати") return "Приховати";
    });
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
    <View style={formContainer}>
      <Text style={formTitle}>Увійти</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={form}
      >
        <View style={inputWrapper}>
          <TextInput
            onChangeText={(value) => onInputChange({ email: value })}
            value={userCredentials.email}
            style={[input, focusedInputName === "email" && onInputFocus()]}
            inputMode="email"
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            onFocus={() => setFocusedInputName("email")}
            onBlur={() => setFocusedInputName("")}
          />
        </View>
        <View style={[inputWrapper, inputPositioning]}>
          <TextInput
            onChangeText={(value) => onInputChange({ password: value })}
            value={userCredentials.password}
            style={[input, focusedInputName === "password" && onInputFocus()]}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!isPassShown}
            onFocus={() => setFocusedInputName("password")}
            onBlur={() => setFocusedInputName("")}
          />
          <TouchableOpacity
            onPress={() => onShowBtnPress()}
            style={showPassBtn}
          >
            <Text style={showPassBtnTxt}>{inputBtnText}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={formSubmitHandler} style={submitBtn}>
          <Text style={submitBtnText}>Увійти</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={loginText}>Немає акаунту? Зареєструватись</Text>
    </View>
  );
};

export default LoginForm;
