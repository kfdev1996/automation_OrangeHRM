const { defineConfig } = require("cypress");

        

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
  mochaFile: 'cypress/results/results-[hash].xml'
  },

  e2e: {
                setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
