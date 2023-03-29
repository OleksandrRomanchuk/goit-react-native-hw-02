import MainView from "../../../module/MainView/MainView";
import CameraIcon from "../../../img/svg/CameraIcon";
import MapIcon from "../../../img/svg/MapIcon";
import TrashIcon from "../../../img/svg/TrashIcon";
import PostImage from "../../../components/PostImage/PostImage";
import Button from "../../../components/Button/Button";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { useState } from "react";
import { initialValues } from "./initialsValues";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/posts/postsSlice";
import { getRandomInt } from "../../../helpers/randomNumberFunc";

import {
  container,
  contentWrapper,
  imageWrapper,
  addImageBtn,
  imageText,
  inputsWrapper,
  label,
  input,
  inputIcon,
  locationInput,
  trashIconWrapper,
  trashIconBtn,
} from "./CreatePostsScreenStyles";

const CreatePostsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [isImageShow, setIsImageShow] = useState(false);
  const [post, setPost] = useState(initialValues);
  const activeBtn = Boolean(isImageShow && post.name && post.location);

  const onInputChange = (value) => {
    setPost((state) => ({ ...state, ...value }));
  };

  const formSubmitHandler = () => {
    const newPost = {
      ...post,
      id: getRandomInt(5, 10000000),
    };

    dispatch(addPost(newPost));
    navigation.navigate("Home");
  };

  return (
    <MainView route={route} navigation={navigation}>
      <View style={container}>
        <View style={contentWrapper}>
          <View>
            <View style={[imageWrapper, { borderWidth: isImageShow ? 0 : 1 }]}>
              {isImageShow && (
                <PostImage source={require("../../../img/forest.jpg")} />
              )}
              <TouchableOpacity
                onPress={() => setIsImageShow((state) => !state)}
                style={[
                  addImageBtn,
                  isImageShow && {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  },
                ]}
              >
                <CameraIcon isImageShow={isImageShow} />
              </TouchableOpacity>
            </View>
            <Text style={imageText}>
              {isImageShow ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </View>
          <View style={inputsWrapper}>
            <View style={label}>
              <TextInput
                style={input}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                value={post.name}
                onChangeText={(value) => onInputChange({ name: value })}
              />
            </View>
            <View style={label}>
              <TextInput
                style={[input, locationInput]}
                placeholder="Локація..."
                placeholderTextColor="#BDBDBD"
                value={post.location}
                onChangeText={(value) => onInputChange({ location: value })}
              />
              <TouchableOpacity
                style={inputIcon}
                onPress={() => navigation.navigate("MapScreen")}
              >
                <MapIcon />
              </TouchableOpacity>
            </View>
          </View>
          <Button
            title="Опублікувати"
            pressHandler={formSubmitHandler}
            activeBtn={activeBtn}
          />
        </View>
        <View style={trashIconWrapper}>
          <TouchableOpacity
            style={trashIconBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <TrashIcon />
          </TouchableOpacity>
        </View>
      </View>
    </MainView>
  );
};

export default CreatePostsScreen;
