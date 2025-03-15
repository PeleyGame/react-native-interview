import { Dimensions, Platform, StatusBar } from "react-native";

export function getWidth() {
  return Dimensions.get("screen").width;
}

export function getHeight() {
  return Dimensions.get("screen").height;
}

export function getStatusBarHeight() {
  return Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) - getHeight() / 100 : 0;
}
