import Animated, { Easing } from "react-native-reanimated";
import { Dimensions } from "react-native";
import { State } from "react-native-gesture-handler";
import runTiming from "./runTiming";

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;
export let buttonOpacity = new Value(1);

const { width, height } = Dimensions.get("window");

export const onStateChange = event([
  {
    nativeEvent: ({ state }) =>
      block([
        cond(
          eq(state, State.END),
          set(buttonOpacity, runTiming(new Clock(), 1, 0))
        )
      ])
  }
]);
// login
export const buttonY = interpolate(buttonOpacity, {
  inputRange: [0, 1],
  outputRange: [-350, 0],
  extrapolate: Extrapolate.CLAMP
});


export const bgY = interpolate(buttonOpacity, {
  inputRange: [0, 1],
  outputRange: [-height / 3, 0],
  extrapolate: Extrapolate.CLAMP
});

export const formZindex = interpolate(buttonOpacity, {
  // when button opacity is 0 => Zindex=1 and vice versa
  inputRange: [0, 1],
  outputRange: [1, -1],
  extrapolate: Extrapolate.CLAMP
});

export const formOpacity = interpolate(buttonOpacity, {
  inputRange: [0, 1],
  outputRange: [1, 0],
  extrapolate: Extrapolate.CLAMP
});

export const formInputY = interpolate(buttonOpacity, {
  inputRange: [0, 1],
  outputRange: [0, 100],
  extrapolate: Extrapolate.CLAMP
});

export const rotateCross = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP
  });

export const closeState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1))
          )
        ])
    }
  ]);