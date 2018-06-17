import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeComponent: <Logo />
    };
  }
  componentDidMount = () => {
    setTimeout(2000, () => {
      this.setState({ activeComponent: <Menu /> });
    });
  };

  render() {
    return (
      <View>
        {this.state.activeComponent}
        <Text> LOL </Text>
      </View>
    );
  }
}
// AppRegistry.registerComponent("App", () => <App />);
