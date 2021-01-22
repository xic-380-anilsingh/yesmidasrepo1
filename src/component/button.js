import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
            flex:1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
              flex:1,
            backgroundColor: "gray",
            borderWidth: 1,
            borderColor: "gray",
            // width: deviceWidth * 0.9,
            paddingVertical: 10,
            borderRadius:5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {this.props.name}{" "}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default Button;