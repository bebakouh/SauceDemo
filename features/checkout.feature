Feature: Checkout Prozess


  Background:

    Given der Benutzer ist erfolgreich eingeloggt
    And der Benutzer fügt das Produkt "Sauce Labs Backpack" zum Warenkorb hinzu
    And der Benutzer befindet sich im Warenkorb


  Scenario: Pflichtfelder prüfen

    When der Benutzer startet den Checkout
    And der Benutzer bestätigt die Bestellung ohne Eingaben
    Then wird eine Fehlermeldung angezeigt


  Scenario: Bestellung erfolgreich abschließen

    When der Benutzer startet den Checkout
    And der Benutzer gibt seine Daten ein
    And der Benutzer bestätigt die Bestellung
    Then wird die Bestellung abgeschlossen