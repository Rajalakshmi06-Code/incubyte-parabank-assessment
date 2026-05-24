# Parabank Automation Assessment

## 📌 Overview

This project automates the **Sign-Up, Logout, and Login flow** for the Parabank application and validates the **account balance after successful login**.

The automation framework is implemented using:

- Playwright
- Cucumber (BDD)
- JavaScript
- Page Object Model (POM)

---

## 🚀 Tech Stack

- Playwright (Browser Automation)
- Cucumber (BDD Framework)
- JavaScript (Node.js)
- Page Object Model (Design Pattern)

---

## 📂 Project Structure

```text
features/
└── signup.feature
└── step-definitions/
    └── signup.steps.js

pages/
├── HomePage.js
├── RegisterPage.js
├── LoginPage.js
└── AccountOverviewPage.js

utils/
└── testData.js

videos/

reports/
├── cucumber-report.json
└── cucumber-report.html

test-cases/
└── Parabank_TestCases.xlsx

cucumber.js
report.js
README.md
package.json
```

---

## 🧪 Test Scenario Covered

### ✔ End-to-End Flow

1. Launch Parabank application
2. Navigate to registration page
3. Create a new user account with dynamic credentials
4. Logout from application after registration
5. Login again using created credentials
6. Verify Account Overview page is displayed
7. Capture and print account balance

---

## 🧾 BDD Feature File

```gherkin
Feature: Parabank Signup and Login Flow

  @signup
  Scenario: New user registers, logs in, and verifies account balance is displayed
    Given user launches parabank website
    When user registers with valid details
    And user logs out from application
    And user logs in with created credentials
    Then user should see account overview page
    And user should print account balance
```

---

## ▶️ Installation & Execution

Install dependencies:

```bash
npm install
```

Run the automation test:

```bash
npm test
```

This will execute the tests and automatically generate the HTML report.

---

## 📊 Test Reporting

HTML execution report is automatically generated using `cucumber-html-reporter` after every test run.

Generated report location:

```text
reports/cucumber-report.html
```

Account balance is logged in the terminal during test execution using console output.

---

## 📄 Test Case Documentation

Test cases covering the Sign-Up, Login, Logout, and Account Balance validation flows are documented in the Excel file:

```text
test-cases/Parabank_TestCases.xlsx
```

---

## 🎥 Execution Proof

Execution video is available in the `videos` folder.

---

## ✅ Framework Design

- BDD approach implemented using Cucumber feature files
- Page Object Model (POM) for maintainability and reusability
- Dynamic username generation to avoid duplicate user conflicts
- Locators defined in constructor for pages with multiple fields
- Assertions added for registration success, login validation, and account balance verification
- Playwright video recording enabled for execution proof
- HTML reporting automatically generated after every test run
