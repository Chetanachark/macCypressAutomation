const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // retries:
  // {
  //   runmode: 1
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "gxz56d",
    specPattern:"cypress/integration/practice/*.js"
  },
});
