const typesPipe = 'feat|fix|test|ci|docs|perf|refactor|revert';

module.exports = {
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'signed-off-by': [0], // level: disabled
    'function-rules/signed-off-by': [
      2, // level: error
      'always',
      (parsed: {header: string}) => {
        if (
          new RegExp(`^PEL-\\d+ (${typesPipe}): .+$`).test(parsed?.header || '')
        ) {
          return [true];
        }

        return [
          false,
          `The commit message must pass the following RegExp pattern: \n\n\t /^PEL-\\d+ (${typesPipe}): .+$/`,
        ];
      },
    ],
  },
};
