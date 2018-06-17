import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Quiz by Pr0xY &amp; ...</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#000",
    fontWeight: "800",
    fontSize: 24,
    textAlign: "center"
  }
});
