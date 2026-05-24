const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const RegisterPage = require('../../pages/RegisterPage');
const LoginPage = require('../../pages/LoginPage');
const AccountOverviewPage = require('../../pages/AccountOverviewPage');
const userData = require('../../utils/testData');

setDefaultTimeout(60000);
let browser, context, page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: 'videos/', size: { width: 1920, height: 1080 } }
  });
  page = await context.newPage();
});

Given('user launches parabank website', async function () {
  await new HomePage(page).navigate();
  await new HomePage(page).clickRegister();
});

When('user registers with valid details', async function () {
  await new RegisterPage(page).registerUser(userData);
});

When('user logs out from application', async function () {
  await new HomePage(page).logout();
});

When('user logs in with created credentials', async function () {
  await new LoginPage(page).login(userData.username, userData.password);
});

Then('user should see account overview page', async function () {
  await new AccountOverviewPage(page).verifyLoginSuccess();
});

Then('user should print account balance', async function () {
  const balance = await new AccountOverviewPage(page).printAccountBalance();
  expect(balance).toBeTruthy();
});

After(async function () {
  await context.close();
  await browser.close();
});