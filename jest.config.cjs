module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    globals: {
        'test-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    setupFilesAfterEnv: ['./jest.setup.cjs'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    }
};
