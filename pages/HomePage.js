class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  }

  async clickRegister() {
    await this.page.locator('a[href*="register"]').click();
  }

  async logout() {
    await this.page.locator('a[href*="logout"]').click();
    await this.page.waitForLoadState('networkidle');
  }
}
module.exports = HomePage;