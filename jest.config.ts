/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: 'v8',

  transform: {
    '^.+.tsx$': 'ts-jest',
    '^.+.[j|t]sx?$': 'babel-jest',
  },
  testMatch: [
    '<rootdir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootdir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  // 当前环境是jsdom还是node
  testEnvironment: 'jsdom',
  // 设置别名，若不设置，运行单测时会不认识@符号
  moduleNameMapper: {
    '^@/(.*)$': '<rootdir>/src/$1',
  },
};
