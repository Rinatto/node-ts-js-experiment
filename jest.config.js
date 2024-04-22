module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js|jsx)', // Поиск файлов тестов для TypeScript и JavaScript
        '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)' // Включение spec и test файлов
    ]
};