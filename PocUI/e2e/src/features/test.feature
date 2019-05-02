Feature: Test *** Duplicating Home just for test purposes ***

    Background: As a user I want to visit the home page so I can view help cards.
        Given I am a user 2
        When I visit the home page 2

    @desktop
    Scenario: I see the desktop view of the home page
        Then I see the title 2

    @mobile
    Scenario: I see the mobile view of the home page
        Then I see the title 2
        