import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Platform,
  AsyncStorage
} from "react-native";
import { Button, Icon } from "native-base";
import axios from "axios";
import { DoubleBounce, Bars } from "react-native-loader";

export default class Login extends Component {
  Login = () => {
    this.setState({ isLoading: true });
    if (this.state.Email !== "" && this.state.Password !== "") {
      alert("success");
    } else {
      alert("Please fill all fields");
      this.setState({ isLoading: false });
    }
  };

  state = {
    Email: "",
    Password: "",
    isLoading: false,
    secureEntry: true
  };

  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            //   height: Dimensions.get("window").height,
            justifyContent: "center",
            // paddingTop: 50,
            // paddingBottom: 50,
            flex: 1
          }}
        >
          <Image style={{ width: 40, height: 60 }} />
          <View
            style={{
              width: "85%",
              padding: 20,
              alignItems: "center",
              backgroundColor: "#1a449a",
              marginTop: 20,
              borderRadius: 20,
              paddingBottom: 60,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5
              },
              shadowOpacity: 0.36,
              shadowRadius: 6.68,
              elevation: 8
            }}
          >
            <TextInput
              style={{
                width: "95%",
                height: 50,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 10,
                fontSize: 20,
                fontWeight: "800",
                marginTop: 20
              }}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="gray"
              value={this.state.Email}
              onChangeText={val => {
                this.setState({ Email: val });
              }}
            />
            <View style={{ width: "95%", flexDirection: "row" }}>
              <TextInput
                style={{
                  width: "80%",
                  height: 50,
                  paddingLeft: 20,
                  backgroundColor: "white",
                  fontSize: 20,
                  fontWeight: "800",
                  marginTop: 20,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10
                }}
                placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor="gray"
                value={this.state.Password}
                onChangeText={val => {
                  this.setState({ Password: val });
                }}
                secureTextEntry={this.state.secureEntry}
              />
              <TouchableOpacity
                style={{
                  width: "20%",
                  height: 50,
                  backgroundColor: "white",
                  marginTop: 20,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() =>
                  this.setState({ secureEntry: !this.state.secureEntry })
                }
              >
                <Icon
                  name={this.state.secureEntry ? "eye-with-line" : "eye"}
                  type="Entypo"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{ width: "100%", alignItems: "flex-end", marginTop: 10 }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Forgot")}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Forgot Password ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              backgroundColor: "#1a449a",
              alignItems: "center",
              justifyContent: "center",
              marginTop: -40,
              elevation: 8
            }}
          >
            {this.state.isLoading ? (
              <View
                style={{
                  backgroundColor: "#1a449a",
                  borderRadius: 100,
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Bars size={10} color="white" />
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: "#58d9a4",
                  borderRadius: 100,
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => this.Login()}
              >
                <Icon
                  active
                  name="arrowright"
                  type="AntDesign"
                  style={{ fontSize: 30, color: "white" }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10
            }}
          >
            <Text style={{ fontSize: 17 }}>Dont't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text style={{ fontSize: 17, color: "blue" }}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
