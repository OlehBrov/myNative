import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";

import { RegistrationStyles as styles } from "../Styles/registrationScreenStyles";
import { useState } from "react";

export const LogInScreen = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordHidden, SetIsPasswordHidden] = useState(true);
  const handlesSubmit = () => {
    // Alert.alert("Credentials", `${login} + ${email}`);
  };

  return (
    // <View style={LoginStyles.inputWrap}>
    <KeyboardAvoidingView
      style={LoginStyles.inputWrap}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.regWrapInput, flex: 0.5, paddingTop: 32, paddingBottom: 111 }}>
        <Text style={styles.headerRegStyle}>Log in</Text>

        <View style={styles.registrationInputs}>
          <TextInput
            style={styles.input}
            textContentType="emailAddress"
            placeholder="Enter Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          ></TextInput>

          <TextInput
            style={{ ...styles.input, paddingRight: 70 }}
            // textContentType="password"
            placeholder="Enter password"
            value={password}
            secureTextEntry={isPasswordHidden}
            onChangeText={(value) => setPassword(value)}
          ></TextInput>
          <Pressable
            onPressIn={() => SetIsPasswordHidden(false)}
            onPressOut={() => SetIsPasswordHidden(true)}
          >
            <Text style={{ ...styles.buttonText, ...styles.pressableShow }}>
              Show
            </Text>
          </Pressable>
        </View>
        {/* <Button title="Register"/> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handlesSubmit}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.authLink}>Don't have account? Sign up!</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const LoginStyles = StyleSheet.create({
  inputWrap: {

    justifyContent: "flex-end",
    flex: 1,

    marginBottom: 0,
  
  },
});
