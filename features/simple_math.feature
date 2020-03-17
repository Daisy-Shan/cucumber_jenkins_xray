Feature: much more complex stuff

  @TEST_THOR-875
  Scenario Outline: much more complex stuff
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>
    Examples: 
      | var | increment | result |
      | 100 | 5         | 105    |
      | 99  | 1234      | 1333   |
      | 12  | 5         | 17     |