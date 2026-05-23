const { expect } = require('@playwright/test');

class AccountOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/overview/);
  }

  async printAccountBalance() {
    const balance = await this.page.locator('#accountTable').textContent();

    console.log('Account Balance Details:', balance);
  }
}

module.exports = AccountOverviewPage;