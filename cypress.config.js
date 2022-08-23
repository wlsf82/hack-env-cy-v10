const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      v1Environment: {
        maxResultsInitialLoad: 100,
      },
      v2Environment: {
        maxResultsInitialLoad: 20,
      },
    },    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
  fixturesFolder: false,
})
