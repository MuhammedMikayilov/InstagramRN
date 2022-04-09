import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { usersService } from "../../../api/services/users";
import { storiesStyle } from "./style";
import { getUsers } from "../../../redux/action/users";
import { useDispatch, useSelector } from "react-redux";

const Stories = () => {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.users);

  const handleChangeViewStoryState = (item) => {
    const editted = { ...item, seen: true };
    usersService.updateUser(item.id, editted).then(() => {
      usersService.getAllUsers().then(({ data }) => {
        getUsers()(dispatch);
      });
    });
  };

  React.useEffect(() => {
    getUsers()(dispatch);
  }, [dispatch]);
  return (
    <View style={storiesStyle.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users?.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={storiesStyle.usersStory}
            onPress={() => handleChangeViewStoryState(item)}
          >
            <Image
              source={{ uri: item.avatar }}
              style={[
                storiesStyle.story,
                { borderColor: `${item.seen ? "gray" : "red"}` },
              ]}
            />
            <Text style={storiesStyle.username}>{item.username}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
