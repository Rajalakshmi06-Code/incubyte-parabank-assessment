Feature: Parabank Signup and Login

  Scenario: User successfully registers and logs in
    Given user launches parabank website
    When user registers with valid details
    And user logs in with created credentials
    Then user should see account overview page
    And user should print account balance