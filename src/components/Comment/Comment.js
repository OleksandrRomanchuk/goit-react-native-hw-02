import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { transformDate } from "../../helpers/transformDateFunc";

import {
  container,
  avatar,
  messageWrapper,
  message,
  date,
} from "./CommentStyles";

const Comment = ({ comment }) => {
  const { name } = useSelector(selectUser);
  const isUserAuthor = comment.author === name ? true : false;

  return (
    <View style={[container, isUserAuthor && { flexDirection: "row-reverse" }]}>
      <Image
        source={
          isUserAuthor
            ? require("../../img/userImage.jpg")
            : require("../../img/guestAvatar.jpg")
        }
        style={avatar}
      />
      <View
        style={[
          messageWrapper,
          isUserAuthor && { borderTopRightRadius: 0, borderTopLeftRadius: 6 },
        ]}
      >
        <Text style={message}>{comment.message}</Text>
        <Text style={[date, isUserAuthor && { textAlign: "left" }]}>
          {transformDate(comment.addedOn)}
        </Text>
      </View>
    </View>
  );
};

export default Comment;
