import AuthBackground from "../../../components/AuthBackground/AuthBackground";
import RegisterForm from "../../../module/RegisterForm/RegisterForm";
import { signUpUser } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const onFormSubmit = (userCredentials) => {
    dispatch(signUpUser(userCredentials));
    navigation.navigate("Home");
  };

  return (
    <AuthBackground>
      <RegisterForm onFormSubmit={onFormSubmit} navigation={navigation} />
    </AuthBackground>
  );
};

export default RegistrationScreen;
