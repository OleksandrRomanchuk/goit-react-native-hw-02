import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import HomeScreen from "./screens/main/HomeScreen/HomeScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen/ProfileScreen";
import CommentsScreen from "./screens/main/CommentsScreen/CommentsScreen";
import MapScreen from "./screens/main/MapScreen/MapScreen";

const MainStack = createStackNavigator();

const RoutesStack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="SignUp"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: "Профіль",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Локація",
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesStack;
