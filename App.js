import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { NavigationContainer } from "react-native-screens";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { AppNavigator } from "./src/navigators/InstagramNavigator";
import { store } from "./src/redux/store";

import { HomeScreen } from "./src/screens/HomeScreen";
import { mainStyles } from "./src/screens/HomeScreen/styles";

// const Tab = createBottomTabNavigator();
const AppContainer = createAppContainer(AppNavigator);
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={mainStyles.container}>
        {/* <NavigationContainer> */}
        {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator> */}
        {/* NavigationContainer */}
        {/* <AppNavigator /> */}
        {/* </NavigationContainer> */}
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
