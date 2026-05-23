const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Application": "Parabank",
    "Framework": "Playwright + Cucumber",
    "Platform": "Windows",
    "Executed": "Local"
  }
};

reporter.generate(options);