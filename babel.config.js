module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {moduleName: '@dotenv'}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@utils': './src/utils',
        },
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
    'react-native-reanimated/plugin',
  ],
};
