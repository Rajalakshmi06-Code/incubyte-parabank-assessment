const { expect } = require('@playwright/test');

class AccountOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/overview/);
  }

  async printAccountBalance() {
    const firstRow = this.page.locator('#accountTable tbody tr').first();
    await expect(firstRow).toBeVisible();

    const accountNumber = await firstRow.locator('td').nth(0).innerText();
    const balance = await firstRow.locator('td').nth(1).innerText();

    console.log(`Account Number: ${accountNumber}`);
    console.log(`Account Balance: ${balance}`);

    expect(balance.trim()).not.toBe('');

    return balance.trim();
  }
}

module.exports = AccountOverviewPage;