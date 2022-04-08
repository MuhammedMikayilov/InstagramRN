import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../../components/home/Header";
import { mainStyles } from "./styles";

function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
}

export default HomeScreen;
