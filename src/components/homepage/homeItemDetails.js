import React from "react";
import { View } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";
import { styles } from "../../styles";
const HomeItemDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <Text h2 style={styles.mainTitle}>
        HomeItemDetails
      </Text>
    </View>
  );
};

export default HomeItemDetails;
