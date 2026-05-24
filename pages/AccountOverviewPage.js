const { expect } = require('@playwright/test');

class AccountOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountRows = page.locator('#accountTable tbody tr');
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/overview/);
  }

  async printAccountBalance() {
    await this.page.waitForSelector('#accountTable tbody tr');
    const firstRow = this.accountRows.first();
    const accountNumber = await firstRow.locator('td').nth(0).innerText();
    const balance = await firstRow.locator('td').nth(1).innerText();
    console.log(`Account Number: ${accountNumber}`);
    console.log(`Account Balance: ${balance}`);
    return balance.trim();
  }
}
module.exports = AccountOverviewPage;