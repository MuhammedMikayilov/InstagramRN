import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { postsStyle } from "../home/Posts/style";
import PostFooter from "../home/Posts/PostFooter";

const Saved = () => {
  const { data: posts } = useSelector((state) => state.posts);

  const savedPosts = React.useMemo(
    () => posts.filter((post) => post.bookmarked),
    [posts]
  );
  return (
    <ScrollView>
      {savedPosts?.map((item, idx) => (
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
    </ScrollView>
  );
};

export default Saved;
