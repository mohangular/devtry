const { config } = require('./protractor.common');

const baseConfig = Object.assign({}, config);

// Override the base required files.
config.cucumberOpts.require = ['../cucumber/**/support/setup.ts', '../cucumber/**/support/*.integration.ts', '../cucumber/**/*.step.ts'];

/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

exports.config = Object.assign(config, {

  localSeleniumStandaloneOpts: {
    jvmArgs: [ '-Dwebdriver.ie.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer.exe' ]
  },

  params: {
    login_page_url: '',
    app_base: '',
    useMockedApi: false
  },

  capabilities: {
    browserName: 'internet explorer'
  },

  onCleanUp: async() => {
    await baseConfig.onCleanUp();
  },

  onPrepare: async() => {
    await baseConfig.onPrepare();
  }
});
