module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'sort-destructure-keys',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
        endOfLine: 'auto',
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      },
      {
        'selector': 'enum',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^E[A-Z]',
          'match': true
        }
      }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          ['/^react$/'],
          ['/react$/', '/styled-components/'],
          '/^react/',
          'module',
          '/^(@)?app/',
          '/^(@)?models/',
          '/^(@)?constants/',
          '/^(@)?hooks/',
          '/^(@)?components/',
          '/^(@)?pages/',
          '/^(@)?services/',
          '/^(@)?formatters/',
          '/^(@)?helpers/',
          '/^(@)?utils/',
          '/^(@)?assets/',
          '/^(@)?styles/'
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        'callbacksLast': false,
        'shorthandFirst': false,
        'shorthandLast': false,
        'ignoreCase': true,
        'noSortAlphabetically': false,
        'reservedFirst': false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}