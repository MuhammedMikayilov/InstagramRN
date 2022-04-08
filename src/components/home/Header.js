import { View, Text, Image } from "react-native";
import React from "react";
import { headerStyle } from "./style";
import { TouchableOpacity } from "react-native";
import { logo, dmIcon } from "./images";
import Stories from "./Stories/Stories";
import { usersService } from "../../api/services/users";

const Header = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    usersService.getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <View style={headerStyle.container}>
        <TouchableOpacity>
          <Image source={logo} style={headerStyle.logo} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image source={dmIcon} style={headerStyle.dmIcon} />
            <View style={headerStyle.notificationWrapper}>
              <Text style={headerStyle.notification}>{users.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Stories />
    </>
  );
};

export default Header;
