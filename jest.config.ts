const config = {
	setupFilesAfterEnv: ["<rootDir>/tests/setup-tests.ts"],
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
	roots: ["src", "tests"],
	testEnvironment: "jest-environment-jsdom", // Use browser-like testing environment
	testMatch: [
		"**/tests/**/*.[jt]s?(x)",
		"**/__tests__/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[tj]s?(x)",
	],
	testPathIgnorePatterns: ["\\\\node_modules\\\\", "setup-tests.ts"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest", // That one tells Jest to use ts-jest when dealing with TypeScript files
	},
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy",
	},
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
};

export default config;
