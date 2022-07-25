module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/self-closing-comp': 'error',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			env: { browser: true, es6: true, node: true },
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
			],
			globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: 2018,
				sourceType: 'module',
				project: './tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'comma-dangle': ['error', 'always-multiline'],
				'@typescript-eslint/no-explicit-any': 0,
			},
		},
	],
};
