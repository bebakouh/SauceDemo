Feature: Warenkorb

  Als Kunde
  möchte ich meinen Warenkorb verwalten
  damit ich meine Bestellung prüfen kann.


  Background:

    Given der Benutzer ist erfolgreich eingeloggt
    And der Benutzer fügt das Produkt "Sauce Labs Backpack" zum Warenkorb hinzu


  Scenario: Produkt ist im Warenkorb vorhanden

    When der Benutzer öffnet den Warenkorb
    Then ist das Produkt "Sauce Labs Backpack" im Warenkorb sichtbar


  Scenario: Zur Produktseite zurückkehren

    Given der Benutzer befindet sich im Warenkorb
    When der Benutzer geht zurück zur Produktübersicht
    Then wird die Produktübersicht angezeigt


  Scenario: Checkout starten

    Given der Benutzer befindet sich im Warenkorb
    When der Benutzer startet den Checkout
    Then wird die Checkout-Seite angezeigt