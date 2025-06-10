const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com', 
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 30000, 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});