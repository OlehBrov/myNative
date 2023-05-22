import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { RegistrationStyles as styles } from "../Styles/registrationScreenStyles";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, SetIsPasswordHidden] = useState(false);
  const [avatar, setAvatar] = useState(true);
  const handlesSubmit = () => {
    Alert.alert("Credentials", `${login} + ${email}`);
    console.log("login", login);
    console.log("email", email);
  };

  return (
    // <View style={styles.inputWrap}>
    <KeyboardAvoidingView
      // style={{flex: .5}}
      style={{
        justifyContent: "flex-end",
        flex: 1,
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.regWrapInput}>
        <View style={styles.imageWrap}>
          <TouchableOpacity
            style={{
              ...styles.photoIconWrap,
              borderWidth: 1,
              backgroundColor: "#FFF",
              borderColor: avatar ? "#BDBDBD" : "#FF6C00",
              // transform: avatar ?({ rotateX: '0deg'}) : ({rotateX: '45deg'}),
            }}
          >
            <View
              style={{
                transform: avatar ? "rotateZ(45deg)" : "rotateZ(0deg)",
              }}
            >
              <Ionicons
                name="add"
                size={24}
                color={avatar ? "#BDBDBD" : "#FF6C00"}
              />
            </View>
          </TouchableOpacity>

          <Image
            source={require("../Images/userPhoto.jpg")}
            style={styles.accountPhoto}
          ></Image>
        </View>
        <Text style={styles.headerRegStyle}>Registration</Text>

        <View style={styles.registrationInputs}>
          <TextInput
            style={styles.input}
            placeholder="Enter Login"
            value={login}
            onChangeText={(value) => setLogin(value)}
          ></TextInput>

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
        <TouchableOpacity style={styles.button} onPress={handlesSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.authLink}>Already Signed up? Login...</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
