import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = { text: "1" };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/MenuWP.jpg")} />
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.title}> QUIIZ </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity activeOpacity={0.5} style={styles.btns}>
              <Text style={styles.buttons}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btns}>
              <Text style={styles.buttons}>Options</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btns}>
              <Text style={styles.buttons}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.btns}>
              <Text style={styles.buttons}>Rate us</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const width = Dimensions.get("window").width;
const wv = width / 100;
const height = Dimensions.get("window").height;
const wh = height / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // height: height,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  title: {
    flex: 1,
    width: width,
    fontSize: 50,
    textAlign: "center",
    paddingVertical: 10
  },
  image: {
    position: "absolute",
    width: width,
    height: height
  },
  buttons: {
    textAlign: "center",
    color: "#08f",
    alignSelf: "center",
    paddingTop: wh * 5
  },
  btnContainer: {
    marginTop: 11 * wh,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  btns: {
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    width: wv * 80,
    height: 15 * wh,
    paddingVertical: 5,
    backgroundColor: "#fff6",
    borderBottomWidth: 1,
    marginBottom: 5
  }
});
