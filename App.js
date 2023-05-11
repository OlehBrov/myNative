import { NavigationContainer } from "@react-navigation/native";
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
const MainStack = createStackNavigator();
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            {/* <ScrollView style={{flex: 2}}> */}
            <ImageBackground
              source={require("./Images/background.jpg")}
              style={styles.image}
            >
              <RegistrationScreen />
              {/* <LogInScreen /> */}
            </ImageBackground>
            {/* </ScrollView> */}
          </MainStack.Navigator>
        </NavigationContainer>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
