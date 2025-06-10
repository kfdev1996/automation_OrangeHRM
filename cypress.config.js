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
    defaultCommandTimeout: 20000, 
    pageLoadTimeout: 50000, 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
     userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  },
});