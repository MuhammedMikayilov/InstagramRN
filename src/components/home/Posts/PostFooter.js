import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { postsStyle } from "./style";
import { usersService } from "../../../api/services/users";
import { postsService } from "../../../api/services/posts";
import { useDispatch } from "react-redux";
import { getAllPosts, updatePosts } from "../../../redux/action/posts";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostFooter = ({ likedCount, item }) => {
  const dispatch = useDispatch();

  const handleChangeLikeState = React.useCallback(() => {
    const count = item.liked ? item.likedCount - 1 : item.likedCount + 1;

    const editted = {
      ...item,
      liked: !item.liked,
      likedCount: count,
    };
    updatePosts(item.id, editted)(dispatch);
  }, [item, dispatch]);

  const handleChangeBookmarked = React.useCallback(() => {
    const editted = {
      ...item,
      bookmarked: !item.bookmarked,
    };
    updatePosts(item.id, editted)(dispatch);
  }, [item, dispatch]);

  return (
    <View>
      <View style={postsStyle.iconWrapper}>
        <View style={postsStyle.icons}>
          <TouchableOpacity onPress={handleChangeLikeState}>
            <Ionicons
              name={item.liked ? "heart" : "heart-outline"}
              style={postsStyle.icon}
              size={30}
              color={item.liked ? "red" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={"chatbubble-outline"}
              style={postsStyle.commentIcon}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={"send"}
              style={postsStyle.send}
              size={25}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleChangeBookmarked}>
          <Ionicons
            name={item.bookmarked ? "bookmark" : "bookmark-outline"}
            style={postsStyle.bookmarkIcon}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <Text style={postsStyle.likedCount}>{likedCount} likes </Text>

      {item.sharedBy.comment?.length > 0 && (
        <TouchableOpacity>
          <Text style={[postsStyle.likedCount, { color: "white" }]}>
            {item.sharedBy.username}: {item.sharedBy.comment}
          </Text>
        </TouchableOpacity>
      )}

      {item.comments?.length && (
        <TouchableOpacity>
          <Text style={postsStyle.likedCount}>
            View all {item.comments.length} comments
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostFooter;
