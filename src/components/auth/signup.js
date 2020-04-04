import React from "react";
import { Dimensions, TextInput, Text } from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";
import { styles } from "../../styles";
import {
  formZindex,
  formOpacity,
  formInputY,
  rotateCross,
  closeState
} from "../../services/animations";

const Signup = () => {
  const { height } = Dimensions.get("window");
  const { concat } = Animated;
  return (
    <Animated.View
      style={{
        zIndex: formZindex,
        opacity: formOpacity,
        transform: [{ translateY: formInputY }],
        height: height / 1,
        ...styles.splashContainer,
        top: null,
        justifyContent: "center"
      }}
    >
      <TapGestureHandler onHandlerStateChange={closeState}>
        <Animated.View style={styles.closeButton}>
          <Animated.Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              transform: [{ rotate: concat(rotateCross, "deg") }]
            }}
          >
            X
          </Animated.Text>
        </Animated.View>
      </TapGestureHandler>
      <TextInput
        placeholder="firstname"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="lastname"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="phone"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="address"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="email"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="password"
        style={styles.textInput}
        placeholderTextColor="black"
      />
      <Animated.View style={styles.button}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default Signup;
