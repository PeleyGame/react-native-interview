import {Dimensions, PixelRatio} from 'react-native';

interface ScreenDimensions {
  width: number;
  height: number;
}

const DESIGN_WIDTH = 360; // Standard design width for scaling
const DESIGN_HEIGHT = 640; // Standard design height for reference

/**
 * Responsive value calculator based on screen width
 * @param value - The original value from design mockup
 * @param screenWidth - Optional custom screen width for calculations
 * @returns Scaled value adjusted for current screen
 */
export function mvp(value: number): number {
  const width = Dimensions.get('window').width; // Static dimensions instead of hook

  // Prevent division by zero in edge cases
  if (width <= 0) return 0;

  const scale = width / DESIGN_WIDTH;
  return PixelRatio.roundToNearestPixel(value * scale); // [[9]]
}

// Device-specific dimensions (static values)
export const deviceDimensions: ScreenDimensions = Dimensions.get('window');
