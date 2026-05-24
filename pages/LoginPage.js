class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[value="Log In"]').click();
    await this.page.waitForLoadState('networkidle');
  }
}
module.exports = LoginPage;