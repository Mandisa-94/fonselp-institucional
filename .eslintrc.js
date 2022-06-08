module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings:{
		react: {
			version: 'detect',
		}
	},
	extends: [
		'plugin:react/recommended',
		"eslint:recommended",
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		"react/jsx-uses-react": "error",   
     	"react/jsx-uses-vars": "error",
		  "no-unused-vars": "off",
		"react/prop-types": "off",
		"react/display-name": "off",
	},
};
