const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      v1Environment: {
        maxResultsInitialLoad: 100,
        foo: {
          bar: 'bazuca'
        }
      },
      v2Environment: {
        maxResultsInitialLoad: 20,
        foo: {
          bar: 'bazinga'
        }
      },
    },    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
  fixturesFolder: false,
})
