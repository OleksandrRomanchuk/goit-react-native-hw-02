import MessageIcon from "../../img/svg/MessageIcon";
import ThumbsUpIcon from "../../img/svg/ThumbsUpIcon";
import MapIcon from "../../img/svg/MapIcon";
import PostImage from "../PostImage/PostImage";
import { View, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setCurrentPostId, addLike } from "../../redux/posts/postsSlice";

import {
  title,
  infoContainer,
  infoWrapper,
  positioning,
  counts,
  locationText,
} from "./PostStyles";

const Post = ({
  post: { id, image, name, likesCount, location },
  commentsCount,
  navigation,
  route,
}) => {
  const dispatch = useDispatch();

  const messagePressHandler = (id) => {
    dispatch(setCurrentPostId(id));
    navigation.navigate("CommentsScreen");
  };

  return (
    <View>
      <PostImage source={image} />
      <Text style={title}>{name}</Text>
      <View style={infoContainer}>
        <View style={positioning}>
          <View style={infoWrapper}>
            <TouchableOpacity onPress={() => messagePressHandler(id)}>
              <MessageIcon commentsCount={commentsCount} />
            </TouchableOpacity>
            <Text style={[counts, !commentsCount && { color: "#BDBDBD" }]}>
              {commentsCount}
            </Text>
          </View>
          {route.name === "ProfileScreen" && (
            <View style={infoWrapper}>
              <TouchableOpacity onPress={() => dispatch(addLike(id))}>
                <ThumbsUpIcon likesCount={likesCount} />
              </TouchableOpacity>
              <Text style={[counts, !likesCount && { color: "#BDBDBD" }]}>
                {likesCount}
              </Text>
            </View>
          )}
        </View>
        <View style={infoWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
            <MapIcon />
          </TouchableOpacity>
          <Text style={locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
