import React from "react";
import Animated from "react-native-reanimated";
import Svg, { Image, Circle, ClipPath } from "react-native-svg";
import { Dimensions } from "react-native";
import { styles } from "../../styles";
import { buttonY } from "../../services/animations";

const Background = () => {
    const { width, height } = Dimensions.get("window");
  return (
    <Animated.View
      style={{
        ...styles.splashContainer,
        transform: [{ translateY: buttonY }]
      }}
    >
      <Svg height={height + 50} width={width}>
        <ClipPath id="clip">
          <Circle r={height + 50} cx={width / 2} />
        </ClipPath>
        <Image
          href={require("../../../assets/img1.jpg")}
          width={width}
          height={height + 50}
          preserveAspectRatio="xMidYmid slice"
          clipPath="url(#clip)"
        />
      </Svg>
    </Animated.View>
  );
};

export default Background;
