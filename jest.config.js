const nextJest = require('next/jest');

/** @type {import('jest').Config} */

const createJestConfig = nextJest({
	dir: './',
});

const config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/playwright-tests/'],
};

module.exports = createJestConfig(config);
