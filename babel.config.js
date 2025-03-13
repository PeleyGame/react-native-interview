module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {moduleName: '@dotenv'}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          helpers: './src/helpers',
          locales: './src/locales',
          view: './src/view',
          pages: './src/view/pages',
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
  ],
};
// npm start -- --reset-cache
