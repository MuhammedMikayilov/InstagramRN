import { View, Text, Image } from "react-native";
import React from "react";
import { headerStyle } from "./style";
import { TouchableOpacity } from "react-native";
import { logo, dmIcon } from "./images";

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <TouchableOpacity>
        <Image source={logo} style={headerStyle.logo} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Image source={dmIcon} style={headerStyle.dmIcon} />
          <View style={headerStyle.notificationWrapper}>
            <Text style={headerStyle.notification}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
