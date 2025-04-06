/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
   preset: "ts-jest",
   testEnvironment: "node",
   testMatch: ["**/__tests__/**/*.test.ts"],
   moduleFileExtensions: ["ts", "js", "json"],
};
