import { PixelRatio } from "react-native";
import { getHeight, getWidth } from "./getDimensions";


const wp = (widthPercent: string | number) => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((getWidth() * elemWidth) / 100);
};

const hp = (heightPercent: string | number) => {
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((getHeight() * elemHeight) / 100);
};

export { wp, hp };
