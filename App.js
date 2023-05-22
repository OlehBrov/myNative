// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LogInScreen } from "./Screens/LoginScreen";
import { RegistrationStyles } from "./Styles/registrationScreenStyles";
// const MainStack = createNativeStackNavigator();
export default function App() {
  return (
    <ImageBackground
      source={require("./Images/background.jpg")}
      style={RegistrationStyles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <NavigationContainer> */}
          {/* <MainStack.Navigator initialRouteName="Login"> */}
          {/* <ScrollView style={{flex: 2}}> */}

          <RegistrationScreen />
          {/* <LogInScreen /> */}
          {/* </ScrollView> */}
          {/* </MainStack.Navigator> */}
          {/* </NavigationContainer> */}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
