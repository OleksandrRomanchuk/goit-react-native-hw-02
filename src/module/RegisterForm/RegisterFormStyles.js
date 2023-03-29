import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginTop: "auto",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,

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
  avatarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    transform: [{ translateY: -60 }],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBG: {
    position: "relative",

    minWidth: 120,
    minHeight: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
  },
  avatarAddBtn: {
    position: "absolute",
    bottom: 14,
    right: -13,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,

    backgroundColor: "#fff",
    borderRadius: 13,
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