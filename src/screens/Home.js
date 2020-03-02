import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import {
  createDrawerNavigator,
  useIsDrawerOpen
} from "@react-navigation/drawer";
import { Icon, Segment } from "native-base";
import { Dropdown } from "react-native-material-dropdown";

class Home extends Component {
  data = [
    {
      value: "Banana"
    },
    {
      value: "Mango"
    },
    {
      value: "Pear"
    }
  ];

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <ScrollView
          style={{
            padding: 10,
            backgroundColor: "#AADCF7",
            maxHeight: 100
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
              height: 80
            }}
          >
            <Icon
              style={{ color: "#7BE2BB", fontSize: 35 }}
              name="arrow-down-bold-box"
              type="MaterialCommunityIcons"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "gray" }}>To recieve</Text>
              <Text style={{ fontSize: 20, marginTop: 10 }}>27,000</Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
              marginLeft: 20,
              height: 80
            }}
          >
            <Icon
              style={{ color: "#4F7EF5", fontSize: 35 }}
              name="file-export"
              type="MaterialCommunityIcons"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "gray" }}>Sale (Feb)</Text>
              <Text style={{ fontSize: 20, marginTop: 10 }}>27,000</Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
              marginLeft: 20,
              marginRight: 20,
              height: 80
            }}
          >
            <Icon
              style={{ color: "#4F7EF5", fontSize: 35 }}
              name="file-export"
              type="MaterialCommunityIcons"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "gray" }}>Sale (Feb)</Text>
              <Text style={{ fontSize: 20, marginTop: 10 }}>27,000</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            flex: 1
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderWidth: 1,
                borderColor: "gray",
                borderStyle: "solid",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 13 }}>Parties</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderWidth: 1,
                borderColor: "gray",
                borderStyle: "solid",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 13 }}>Transactions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderWidth: 1,
                borderColor: "gray",
                borderStyle: "solid",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 13 }}>Inventory</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 20,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <TextInput
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "gray",
                width: "60%",
                paddingLeft: 10,
                height: 40
              }}
              placeholder="Product Name"
              placeholderTextColor="black"
            />
            <TouchableOpacity
              style={{
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: "#A3E1FC",
                borderRadius: 100,
                width: "30%",
                marginLeft: 10
              }}
            >
              <Icon name="add" />
              <Text style={{ marginLeft: 10 }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
