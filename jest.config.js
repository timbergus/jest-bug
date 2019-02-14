module.exports = {
    notify: true,

    // Coverage configuration to show the missing global summary
    // in Jest output.

    collectCoverage: true,
    coverageReporters: ['lcov'],
    collectCoverageFrom: ['src/*.js'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
};
