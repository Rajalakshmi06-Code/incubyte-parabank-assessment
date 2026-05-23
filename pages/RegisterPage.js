class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async registerUser(userData) {
    await this.page.fill('#customer\\.firstName', userData.firstName);
    await this.page.fill('#customer\\.lastName', userData.lastName);
    await this.page.fill('#customer\\.address\\.street', userData.address);
    await this.page.fill('#customer\\.address\\.city', userData.city);
    await this.page.fill('#customer\\.address\\.state', userData.state);
    await this.page.fill('#customer\\.address\\.zipCode', userData.zipCode);
    await this.page.fill('#customer\\.phoneNumber', userData.phoneNumber);
    await this.page.fill('#customer\\.ssn', userData.ssn);
    await this.page.fill('#customer\\.username', userData.username);
    await this.page.fill('#customer\\.password', userData.password);
    await this.page.fill('#repeatedPassword', userData.password);

    await this.page.click('input[value="Register"]');
  }
}

module.exports = RegisterPage;