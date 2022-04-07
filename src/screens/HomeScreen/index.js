import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../../components/home/Header";
import { mainStyles } from "./styles";

function HomeScreen() {
  return (
    <SafeAreaView style={mainStyles.container}>
      <Header />
    </SafeAreaView>
  );
}

export default HomeScreen;
