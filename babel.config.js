module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    ['module:react-native-dotenv', {moduleName: '@dotenv'}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
