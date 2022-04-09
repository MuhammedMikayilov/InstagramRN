import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import Profile from "../components/profile";

class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Search</Text>
      </View>
    );
  }
}
class CreatePost extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Post</Text>
      </View>
    );
  }
}
class Liked extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Liked</Text>
      </View>
    );
  }
}
// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text style={{ color: "white" }}>Profile</Text>
//       </View>
//     );
//   }
// }

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: Settings,
    },
    CreatePost: {
      screen: CreatePost,
    },
    Liked: {
      screen: Liked,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = focused ? "ios-home" : "ios-home-outline";
            break;
          case "Settings":
            iconName = focused ? "ios-search" : "ios-search-outline";
            break;
          case "CreatePost":
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            break;
          case "Liked":
            iconName = focused ? "heart" : "heart-outline";
            break;
          default:
            iconName = focused ? "person" : "person-outline";
            break;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "white",
      style: { backgroundColor: "black", padding: 0 },
      showLabel: false,
    },
  }
);

// export default createAppContainer(AppNavigator);
