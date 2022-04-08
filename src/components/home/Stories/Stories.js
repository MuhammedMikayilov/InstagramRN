import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { usersService } from "../../../api/services/users";
import { storiesStyle } from "./style";

const Stories = () => {
  const [users, setUsers] = React.useState([]);
  const [viewedStories, setViewedStories] = React.useState(false);

  const handleChangeViewStoryState = (item) => {
    const editted = { ...item, seen: !item.seen };
    usersService.updateUser(item.id, editted).then(() => {
      usersService.getAllUsers().then(({ data }) => {
        setUsers(data);
      });
    });
  };

  React.useEffect(() => {
    usersService.getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);
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
