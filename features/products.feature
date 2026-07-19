Feature: Produkte verwalten

  Als Kunde
  möchte ich Produkte ansehen und verwalten
  damit ich Artikel kaufen kann.


  Background:
    Given der Benutzer ist erfolgreich eingeloggt


  Scenario: Produktliste wird angezeigt

    Then wird die Produktübersicht angezeigt


  Scenario: Produkt zum Warenkorb hinzufügen

    When der Benutzer fügt das Produkt "Sauce Labs Backpack" zum Warenkorb hinzu
    Then wird das Warenkorb Badge mit "1" angezeigt


  Scenario: Produkt aus Warenkorb entfernen

    Given der Benutzer fügt das Produkt "Sauce Labs Backpack" zum Warenkorb hinzu
    When der Benutzer entfernt das Produkt "Sauce Labs Backpack"
    Then ist das Warenkorb Badge nicht sichtbar