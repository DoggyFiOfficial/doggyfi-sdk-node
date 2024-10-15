import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^doggyfi-sdk$': '<rootDir>/src/index.ts',
    '^doggyfi-sdk/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^doggyfi-sdk/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
};

// env variables for testing
process.env['TEST_API_BASE_URL'] = 'https://api.doggyfi.xyz/'
process.env['TEST_DUNE_ID'] = '5345732:9'

export default config;
