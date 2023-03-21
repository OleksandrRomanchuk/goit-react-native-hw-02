import { ImageBackground } from "react-native";
import { bgImage } from "./AuthBackgroundStyles";

const AuthBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../img/authBackground.jpg")}
      style={bgImage}
    >
      {children}
    </ImageBackground>
  );
};

export default AuthBackground;
