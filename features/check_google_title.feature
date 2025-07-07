@ui
Feature: Check google title

  Scenario: Checking google title after searching for wdio
    Given User is on Google main page
    And User accept cookies
    When User searching for 'wdio' in searchbar
    Then Title of page should be 'wdio'