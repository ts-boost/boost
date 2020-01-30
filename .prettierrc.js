module.exports = {
    bracketSpacing: true,
    jsxBracketSameLine: false,
    parser: 'typescript',
    printWidth: 100,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
    overrides: [
        {
            files: ['.babelrc', '.editorconfig', '.prettierrc', '*.json', "*.yml"],
            options: {
                parser: 'json',
                singleQuote: false,
                trailingComma: 'es5',
            },
        },
        {
            files: ['*.yml'],
            options: {
                parser: 'yaml',
                singleQuote: false,
            },
        },
    ],
}
