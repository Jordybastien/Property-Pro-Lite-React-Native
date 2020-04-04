import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import Animated from "react-native-reanimated";
import Login from "../auth/login";
import Signup from "../auth/signup";
import {
  onStateChange,
  buttonY,
  buttonOpacity,
  regbuttonY
} from "../../services/animations";
import { styles } from "../../styles";

const Buttons = () => {
  const { height } = Dimensions.get("window");
  const [showLogin, setShowLogin] = useState(true);
  const viewLogin = () => {
    onStateChange;
    setShowLogin(true);
  };
  const viewSignup = () => {
    onStateChange;
    setShowLogin(false);
  };
  console.log(height)
  return (
    <View style={{ height: height / 3, justifyContent: "center" }}>
      <TapGestureHandler onHandlerStateChange={viewLogin}>
        <Animated.View
          style={{
            ...styles.button,
            opacity: buttonOpacity,
            transform: [{ translateY: buttonY }]
          }}
        >
          <Text style={styles.buttonLabel}>Sign In</Text>
        </Animated.View>
      </TapGestureHandler>
      {/* <TapGestureHandler
        onHandlerStateChange={viewSignup}
      >
        <Animated.View
          style={{
            ...styles.button2,
            opacity: buttonOpacity,
            transform: [{ translateY: regbuttonY }]
          }}
        >
          <Text style={styles.buttonLabel}>Register</Text>
        </Animated.View>
      </TapGestureHandler> */}
      {showLogin ? <Login /> : <Signup />}
    </View>
  );
};

export default Buttons;
