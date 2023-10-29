const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // testIsolation: false,
    baseUrl: "https://react-redux.realworld.io",
    // reporter: "cypress-multi-reporters",
    // reporterOptions: {
    //   reporterEnabled: "mochawesome",
    //   mochawesomeReporterOptions: {
    //     reportDir: "cypress/reports/mocha",
    //     quite: true,
    //     overwrite: false,
    //     html: false,
    //     json: true,
    //   },
    // },
  },
  env: {
    email: "test-cypress99@test.com",
    password: "test123",
  },
  // retries: {
  //   runMode: 2,
  //   openMode: 1,
  // },
});
//! the env data in "cypress.env.json" file, will overwrite the env in here

// retries: set retry test times ~~~ also can set for each particular test