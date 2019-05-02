Feature: Home

    Background: As a user I want to visit the home page so I can view help cards.
        Given I am a user
        When I visit the home page

    @desktop
    Scenario: I see the desktop view of the home page
        Then I see the home page
        And I see the title
        And I see the icon
        And I see the help cards displayed horizonally
        And I see hyperlinks on the help cards

    @mobile
    Scenario: I see the mobile view of the home page
        Then I see the home page
        And I see the title
        And I see the icon
        And I see the help cards displayed vertically
        And I see hyperlinks on the help cards
