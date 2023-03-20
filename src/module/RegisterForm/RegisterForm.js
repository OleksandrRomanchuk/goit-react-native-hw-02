import CrossIcon from "../../img/svg/CrossIcon";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
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
  avatarWrapper,
  avatar,
  avatarBG,
  avatarAddBtn,
  form,
  inputWrapper,
  input,
  inputPositioning,
  showPassBtn,
  showPassBtnTxt,
  submitBtn,
  submitBtnText,
  loginText,
} from "./RegisterFormStyles";

const RegisterForm = ({ onFormSubmit }) => {
  const [focusedInputName, setFocusedInputName] = useState("");
  const [isAvatarShown, setIsAvatarShown] = useState(false);
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

    if (
      !userCredentials.name ||
      !userCredentials.email ||
      !userCredentials.password
    ) {
      alert("All fields must be filled.");
      return;
    }

    setIsAvatarShown(false);
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
        <View>
          <TextInput
            onChangeText={(value) => onInputChange({ name: value })}
            value={userCredentials.name}
            style={[input, focusedInputName === "name" && onInputFocus()]}
            inputMode="text"
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            onFocus={() => setFocusedInputName("name")}
            onBlur={() => setFocusedInputName("")}
          />
        </View>
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
          <Text style={submitBtnText}>Зареєструватись</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={loginText}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegisterForm;
