import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";

import Background from "./background";
import Buttons from "./buttons";

const SplashScreen = () => {
  return (
    <View style={styles.mainSplashContainer}>
      <Background />
      <Buttons />
    </View>
  );
};

export default SplashScreen;
