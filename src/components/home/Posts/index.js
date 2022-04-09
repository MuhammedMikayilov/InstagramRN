import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Divider, Icon } from "react-native-elements";
import { postsService } from "../../../api/services/posts";
import { postsStyle } from "./style";
import { usersService } from "../../../api/services/users";
import { useDispatch, useSelector } from "react-redux";
import PostFooter from "./PostFooter";
import Loading from "../../Loading";
import { getAllPosts } from "../../../redux/action/posts";
import { getUsers } from "../../../redux/action/users";

const Posts = () => {
  const dispatch = useDispatch();
  const { data: posts } = useSelector((state) => state.posts);

  const [, setUsers] = React.useState([]);
  const { data: users } = useSelector((state) => state.users);

  React.useEffect(() => {
    // postsService.getAllPosts().then(({ data }) => setPosts(data));
    getAllPosts()(dispatch);
  }, [dispatch]);

  return (
    <View style={{ marginTop: 20 }}>
      <Divider width={1} orientation="vertical" />
      {posts?.map((item, idx) => (
        <View key={idx} style={postsStyle.container}>
          <View style={postsStyle.wrapper}>
            <TouchableOpacity>
              <Image
                source={{ uri: item?.sharedBy?.avatar }}
                style={[postsStyle.user]}
              />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>{item.sharedBy?.username}</Text>
          </View>
          <Image source={{ uri: item.image }} style={postsStyle.posts} />
          <PostFooter likedCount={item.likedCount} item={item} />

          <View>
            <Text style={{ color: "gray", marginTop: 15, marginLeft: 40 }}>
              {item?.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Posts;
