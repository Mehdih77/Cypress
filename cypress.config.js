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
});
