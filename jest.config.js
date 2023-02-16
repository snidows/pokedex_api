module.exports = {
  roots: ['<rootDir>'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/routes/**.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@applications/(.*)': '<rootDir>/src/applications/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@mocks/(.*)': '<rootDir>/src/mocks/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1'
  }
}
