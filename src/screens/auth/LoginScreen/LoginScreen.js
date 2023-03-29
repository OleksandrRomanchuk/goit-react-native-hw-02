import AuthBackground from "../../../components/AuthBackground/AuthBackground";
import LoginForm from "../../../module/LoginForm/LoginForm";
import { logInUser } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const onFormSubmit = (userCredentials) => {
    dispatch(logInUser(userCredentials));
    navigation.navigate("Home");
  };

  return (
    <AuthBackground>
      <LoginForm onFormSubmit={onFormSubmit} navigation={navigation} />
    </AuthBackground>
  );
};

export default LoginScreen;
