const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

const HomePage = require('../../pages/HomePage');
const RegisterPage = require('../../pages/RegisterPage');
const LoginPage = require('../../pages/LoginPage');
const AccountOverviewPage = require('../../pages/AccountOverviewPage');
const userData = require('../../utils/testData');

setDefaultTimeout(60000);

let browser;
let page;

Before(async function () {
  browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },   // UI resolution
    recordVideo: {
      dir: 'videos/',
      size: { width: 1920, height: 1080 }      // video resolution
    }
  });

  page = await context.newPage();
});

Given('user launches parabank website', async function () {
  const home = new HomePage(page);
  await home.navigate();
  await home.clickRegister();
});

When('user registers with valid details', async function () {
  const register = new RegisterPage(page);
  await register.registerUser(userData);
});

When('user logs out from application', async function () {
  await page.click('a[href*="logout"]');
});

When('user logs in with created credentials', async function () {
  const login = new LoginPage(page);
  await login.login(userData.username, userData.password);
});

Then('user should see account overview page', async function () {
  const account = new AccountOverviewPage(page);
  await account.verifyLoginSuccess();
});

Then('user should print account balance', async function () {
  const account = new AccountOverviewPage(page);
  const balance = await account.printAccountBalance();

  expect(balance).toBeTruthy();
});

After(async function () {
  await browser.close();
});