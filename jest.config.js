module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  snapshotResolver: './custom-snapshot-resolver.js',
};
