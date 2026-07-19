Feature: Login

  Als registrierter Benutzer
  möchte ich mich anmelden
  damit ich Produkte kaufen kann.

  Scenario: Erfolgreicher Login

    Given der Benutzer befindet sich auf der Login-Seite
    When er den Benutzernamen "standard_user" eingibt
    And er das Passwort "secret_sauce" eingibt
    And auf Login klickt
