import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/home/Header";
import Posts from "../../components/home/Posts";
import Loading from "../../components/Loading";
import { getAllPosts } from "../../redux/action/posts";
import { getUsers } from "../../redux/action/users";
import { mainStyles } from "./styles";

export function HomeScreen({ navigation }) {
  const { data: users } = useSelector((state) => state.users);
  const { data: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getAllPosts()(dispatch);
  }, [dispatch]);
  return (
    <SafeAreaView>
      {users && posts ? (
        <ScrollView>
          <Header navigation={navigation} />
          <Posts />
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}
