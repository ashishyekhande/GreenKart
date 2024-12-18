const { defineConfig } = require("cypress");


module.exports = defineConfig({

  video: true,
  videosFolder: "cypress/Video",
  screenshotsFolder: "cypress/Screenshot",
  trashAssetsBeforeRuns: false,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  env:{
    site :"https://rahulshettyacademy.com/seleniumPractise/#/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/TestFolder/*.js"
  },
});
