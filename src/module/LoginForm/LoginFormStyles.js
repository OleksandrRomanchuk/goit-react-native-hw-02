import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginTop: "auto",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
  },
  form: {
    marginTop: 32,
  },
  submitBtn: {
    marginTop: 43,
    paddingHorizontal: 32,
    paddingVertical: 12,

    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  submitBtnText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  loginText: {
    marginTop: 16,

    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
});

export const {
  formContainer,
  formTitle,
  avatarWrapper,
  avatarBG,
  avatar,
  avatarAddBtn,
  form,
  submitBtn,
  submitBtnText,
  loginText,
} = styles;
