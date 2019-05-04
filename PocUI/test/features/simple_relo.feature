# Card_Code and its Rate specifications
# 1 - Moving Service Card - $100
# 2 - Lang Training Card - $200
# 3 - Cultural Training - $150

Feature: Simple Relo
  In order to do rate card value calculation
  As a developer
  I want to get collective information about quantity and card code

  Scenario: One Rate Card value
    Given a card code set to 1
    When I get the quantity as 1
    Then the rate value should be 100

 Scenario Outline: More than one Rate Card Value
  Given a card code set to <card_code>
    When I get the quantity as <qty>
    Then the rate value should be <rate>  
    Examples:
      | card_code | qty | rate |
      |  3        |  2  |  300 |
      |  1        |  1  |  100 |
      |  2        |  3  |  600 |