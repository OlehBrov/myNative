import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <ImageBackground
        source={require("./Images/background.jpg")}
        style={RegistrationStyles.image}
      >
          {/* <NavigationContainer> */}
          {/* <MainStack.Navigator initialRouteName="Login"> */}
          {/* <ScrollView style={{flex: 2}}> */}

          {/* <RegistrationScreen /> */}
          <LogInScreen />
          {/* </ScrollView> */}
          {/* </MainStack.Navigator> */}
          {/* </NavigationContainer> */}
      </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
