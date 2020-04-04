import React from "react";
import { View } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";
import { styles } from "../../styles";
const Homepage = () => {
  return (
    <View style={styles.mainContainer}>
      <Text h2 style={styles.mainTitle}>
        Homepage
      </Text>
    </View>
  );
};

export default Homepage;
