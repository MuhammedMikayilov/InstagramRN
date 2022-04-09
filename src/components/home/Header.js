import { View, Text, Image } from "react-native";
import React from "react";
import { headerStyle } from "./style";
import { TouchableOpacity } from "react-native";
import { logo, dmIcon } from "./images";
import Stories from "./Stories/Stories";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../../redux/action/directs";

const Header = ({ navigation }) => {
  const { data: users } = useSelector((state) => state.users);
  const { data: directs } = useSelector((state) => state.directs);
  const [userLength, setLength] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLength(directs.length);
  }, [directs]);

  React.useEffect(() => {
    getAllMessages()(dispatch);
  }, [dispatch]);
  return (
    <>
      <View style={headerStyle.container}>
        <TouchableOpacity>
          <Image source={logo} style={headerStyle.logo} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Directs")}>
            <Image source={dmIcon} style={headerStyle.dmIcon} />
            {userLength > 0 && (
              <View style={headerStyle.notificationWrapper}>
                <Text style={headerStyle.notification}>{userLength}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Stories users={users} />
    </>
  );
};

export default Header;
