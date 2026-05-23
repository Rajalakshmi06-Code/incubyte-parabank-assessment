# Parabank Automation Assessment

## 📌 Overview

This project automates the **Sign-Up, Logout, and Login flow** for the Parabank application and validates the **account balance after successful login**.

---

## 🚀 Tech Stack

- Playwright (Browser Automation)
- Cucumber (BDD Framework)
- JavaScript (Node.js)
- Page Object Model (Design Pattern)

---

## 📂 Project Structure

features/
└── signup.feature

features/step-definitions/
└── signup.steps.js

pages/
├── HomePage.js
├── RegisterPage.js
├── LoginPage.js
├── AccountOverviewPage.js

utils/
└── testData.js

screenshots/
videos/

---

## 🧪 Test Scenario Covered

### ✔ End-to-End Flow

1. Launch Parabank application
2. Navigate to registration page
3. Create a new user account
4. Logout from application after registration
5. Login again using created credentials
6. Verify Account Overview page is displayed
7. Capture and print account balance

---

## 🧾 BDD Feature File

```gherkin
Feature: Parabank Signup, Logout and Login Flow

Scenario: User creates account, logs out and logs in successfully
  Given user launches parabank website
  When user registers with valid details
  And user logs out from application
  And user logs in with created credentials
  Then user should see account overview page
  And user should print account balance
```
