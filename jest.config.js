module.exports = {
  "roots": [
    "<rootDir>/test"
  ],
  "preset": "ts-jest",
  "automock": false,
  "testEnvironment": "node",
  "collectCoverage": true,
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
  ],
  setupFilesAfterEnv: ['./jest.setup.js']
}
