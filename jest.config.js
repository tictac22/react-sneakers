/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			// required due to custom location of tsconfig.json configuration file
			// https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
			{ tsconfig: "./tsconfig.json" },
		],
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
	},
}

