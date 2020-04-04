import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import { styles } from "./src/styles";
import SplashScreen from "./src/components/splashScreen";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const cacheImages = images => {
    return images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require("./assets/img1.jpg")]);

    await Promise.all([...imageAssets]);
  };

  return (
    <View style={styles.container}>
      {!isReady ? (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      ) : <SplashScreen />}
    </View>
  );
};
export default App;
