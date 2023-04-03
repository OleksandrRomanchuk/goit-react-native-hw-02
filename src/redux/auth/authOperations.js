import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const register = createAsyncThunk("auth/registerUser", async (credentials) => {
  const { name, email, password } = credentials;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!response.user.displayName) {
      await updateProfile(auth.currentUser, { displayName: name });
    }

    const credentials = {
      user: { name: response.user.displayName, email: response.user.email },
      uid: response.user.uid,
    };

    return credentials;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk("auth/logInUser", async (credentials) => {
  const { email, password } = credentials;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    const credentials = {
      user: { name: response.user.displayName, email: response.user.email },
      uid: response.user.uid,
    };

    return credentials;
  } catch (error) {
    console.log("error: ", error);
  }
});

const logOut = createAsyncThunk("auth/logOutUser", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("error: ", error);
  }
});

export { register, logIn, logOut };
