Feature: Parabank Signup and Login Flow

  Scenario: User creates account and logs in successfully
    Given user launches parabank website
    When user registers with valid details
    And user logs out from application
    And user logs in with created credentials
    Then user should see account overview page
    And user should print account balance