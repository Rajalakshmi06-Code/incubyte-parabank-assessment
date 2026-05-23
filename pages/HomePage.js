class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC'
    );
  }

  async clickRegister() {
    await this.page.locator('a[href*="register"]').click();
  }
}

module.exports = HomePage;