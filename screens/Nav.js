import { createStackNavigator } from "react-navigation";
import { Image, TouchableOpacity } from "react-native";
import React from "react";
import Utils from "../utils";
import string from '../utils/i18n';
import HomeScreen from "./HomeScreen";
import BootScreen from "./BootScreen";
import AddPwdScreen from "./AddPwdScreen";
import SettingScreen from "./SettringScreen";
import AboutScreen from "./AboutScreen";
import FeedbackScreen from "./FeedbackScreen";

//languge setting
Utils.setLanguage();
export default (Nav = createStackNavigator(
  {
    Boot: {
      screen: BootScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        title: "iPwd",
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <Image
              style={{ width: 25, height: 25, marginRight: 10 }}
              source={require("../assets/icons8-settings-48.png")}
            />
          </TouchableOpacity>
        )
      })
    },
    AddPwd: {
      screen: AddPwdScreen,
      navigationOptions: ({ navigation }) => ({
        title: string.addpwd,
        headerRight: (
          <TouchableOpacity
            onPress={() => navigation.state.params.storagePwd()}
          >
            <Image
              style={{ width: 25, height: 25, marginRight: 10 }}
              source={{
                uri: "https://img.icons8.com/material/40/ffffff/checkmark.png"
              }}
            />
          </TouchableOpacity>
        )
      })
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        header: null
      }
    },
    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        title: string.feedBack
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        title: string.seeting
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#3770fa"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStack: {
      gesturesEnabled: true
    }
  }
));
