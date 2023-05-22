import { StyleSheet } from "react-native";

export const RegistrationStyles = StyleSheet.create({
  image: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inputWrap: {
    // justifyContent: "center",
    flex: 1,
// backgroundColor: 'tomato',
    // overflow: "hidden",
   
  },
  input: {
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
  },
  regWrapInput: {
    flex: 0.6,
    marginBottom: 0,
    marginTop: 'auto',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  headerRegStyle: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
    color: "#212121",
  },
  registrationInputs: {
    position: "relative",
    gap: 16,
  },
  button: {
    display: "flex",
    marginTop: 25,
    padding: 16,
    height: 51,
    marginHorizontal: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",

    textAlign: "center",
    textTransform: "uppercase",
  },
  pressableShow: {
    position: "absolute",
    bottom: 30,
    right: 30,
    color: "#1B4371",
  },

  imageWrap: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },

  accountPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  photoIconWrap: {
    position: "absolute",
    bottom: 14,
    right: 0,

    zIndex: 5,
    borderRadius: 50,
    transform: [{ translateX: 12 }, { translateY: 0 }],
    overflow: 'hidden',
    justifyContent: 'center',
    alignContent: 'center'
  },
  authLink: {
    textAlign: "center",
    marginTop: 16,
  },
  
});
