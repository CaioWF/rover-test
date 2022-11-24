import type { Config } from 'jest';

const config: Config = {
  bail: true,
  clearMocks: true,
  testEnvironment: 'node',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*controller.ts', '**/*service.ts'],
};

export default config;