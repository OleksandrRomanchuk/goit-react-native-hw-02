import AuthBackground from "../../components/AuthBackground/AuthBackground";
import RegistrationScreen from "../../Screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "../../Screens/LoginScreen/LoginScreen";

const AuthLayout = () => {
  return (
    <AuthBackground>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </AuthBackground>
  );
};

export default AuthLayout;
