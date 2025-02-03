import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // This ensures ts-jest transforms TypeScript files
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // Use the TypeScript configuration
    },
  },
};

module.exports = createJestConfig(customJestConfig);