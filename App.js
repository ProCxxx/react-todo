import React from "react";
import { AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native";

import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeComponent: <Menu />
    };
  }
  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({ activeComponent: <Menu /> });
  //   }, 1000);
  // };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {this.state.activeComponent}
      </View>
    );
  }
}
// AppRegistry.registerComponent("App", () => <App />);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
