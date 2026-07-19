## Übersicht

Dieses Projekt enthält eine automatisierte Testlösung für die E-Commerce-Plattform **SauceDemo**.

Ziel der Testautomatisierung ist es, die wichtigsten Geschäftsprozesse der Anwendung zu überprüfen:

- Benutzeranmeldung
- Produktübersicht
- Warenkorb-Funktionalität
- Checkout-Prozess
- Bestellabschluss
- Produktsortierung

Die Automatisierung wurde mit Playwright und TypeScript umgesetzt und folgt die Best Practices:
- Page Object Model (POM)
- Gute Selektoren
- Gute Assertions
- Wiederverwendbare Methoden
- Unabhängige Tests

# Projektstruktur

SauceDemo/

│
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ ├── CartPage.ts
│ └── CheckoutPage.ts
│
├── tests/
│ ├── login.spec.ts
│ ├── inventory.spec.ts
│ ├── cart.spec.ts
│ ├── checkout.spec.ts
│ ├── sorting.spec.ts
│ └── e2e-purchase.spec.ts
├── documentation/
│ ├── SauceDemo Dokumentation.docx
│
├── reports/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

# Teststrategie

Die Testautomatisierung wurde nach einer risikobasierten Strategie aufgebaut.

Die Priorisierung erfolgte anhand folgender Kriterien:

- Geschäftskritikalität
- Häufigkeit der Nutzung
- Risiko bei Fehlern

Kernbereiche:
- Login-Seite.
- Produktübersicht.
- Warenkorb.
- Checkout-Prozess.
- Bestellbestätigung.

Der wichtigste Geschäftsprozess lautet:
Benutzer meldet sich an → Produkte auswählen → Warenkorb → Checkout → Bestellung erfolgreich abschließen.

# Testabdeckung

## Phase 1 - Login

Automatisierte Tests:

| Test-ID | Beschreibung |
|---------|--------------|
| TF-LOGIN-001 | Erfolgreicher Login |
| TF-LOGIN-002 | Login mit falschem Passwort |
| TF-LOGIN-003 | Login mit ungültigem Benutzer |
| TF-LOGIN-004 | Login ohne Benutzername |
| TF-LOGIN-005 | Login ohne Passwort |
| TF-LOGIN-006 | Login ohne Eingaben |
| TF-LOGIN-007 | Login mit gesperrtem Benutzer |

---

# Phase 2 - Produkte

Automatisierte Tests:

| Test-ID | Beschreibung |
|---------|--------------|
| TF-PRODUKTE-001 | Produktliste wird angezeigt |
| TF-PRODUKTE-002 | Produkt zum Warenkorb hinzufügen |
| TF-PRODUKTE-003 | Produkt aus Warenkorb entfernen |
| TF-PRODUKTE-004 | Warenkorb-Anzeige zählt korrekt |

---

# Phase 3 - Warenkorb

Automatisierte Tests:

| Test-ID | Beschreibung |
|---------|--------------|
| TF-CART-001 | Produkt ist im Warenkorb vorhanden |
| TF-CART-002 | Zur Produktseite zurückkehren |
| TF-CART-003 | Checkout starten |

---

# Phase 4 - Checkout

Automatisierte Tests:

| Test-ID | Beschreibung |
|---------|--------------|
| TF-CHECKOUT-001 | Prüfung der Pflichtfelder |
| TF-CHECKOUT-002 | Erfolgreicher Checkout |
| TF-CHECKOUT-003 | Checkout-Übersicht prüfen |
| TF-CHECKOUT-004 | Bestellung abgeschlossen |

---

# Phase 5 - Sortierung

Automatisierte Tests:

| Test-ID | Beschreibung |
|---------|--------------|
| TF-SORT-001 | Produkte nach Name A-Z sortieren |
| TF-SORT-002 | Produkte nach Name Z-A sortieren |
| TF-SORT-003 | Preise aufsteigend sortieren |
| TF-SORT-004 | Preise absteigend sortieren |

---

# End-to-End Test

## E2E-001 - Erfolgreicher Kaufprozess

Der End-to-End-Test überprüft den kompletten Kundenablauf: Ein Kunde kann ein Produkt kaufen und die Bestellung erfolgreich abschließen.
Der komplette Prozess wurde geprüft:
- Login funktioniert
- Produkt kann hinzugefügt werden
- Warenkorb funktioniert
- Checkout kann gestartet werden
- Kundendaten werden angenommen
- Bestellung wird abgeschlossen
- Bestätigung wird angezeigt

# Installation

## Voraussetzungen

Benötigt werden:

- Node.js
- npm

# Umgesetzte Best Practices

# Parallelisierung

Die Tests werden parallel ausgeführt.

Vorteile:
- Kürzere Ausführungszeit
- Schnellere Testergebnisse

# Page Object Model (POM)

Die Anwendung wurde nach dem Page Object Model aufgebaut.

Vorteile:
- Trennung zwischen Testlogik und Seitenelementen
- Wiederverwendbare Komponenten
- Einfachere Wartung

# Gute Selektoren

Verwendete Selektoren: z.B page.locator('#login-button')
- IDs
- data-test Attribute
- stabile CSS-Selektoren

# Gute Assertions

Die Tests verwenden klare Prüfungen; zum Beispiel: expect(page).toHaveURL() - expect(element).toHaveText()

# Noch offene Erweiterungen

Mögliche zukünftige Erweiterungen:

- Integration in CI/CD Pipeline
- API-Tests
- Performance-Tests
- Accessibility-Tests
- Mobile Browser Tests

# Projektinformationen

- Projekt: SauceDemo
- Framework: Playwright
- Programmiersprache: TypeScript
- Architektur: Page Object Model (POM)

# Ergänzung

| Tool	| Zweck |
|---------|--------------|
| Playwright	| Automatisierung der Webtests
| ESLint	| Überprüfung der Codequalität und Einhaltung von Coding Standards
| Prettier	| Einheitliche Formatierung des Quellcodes
| Husky	| Automatische Ausführung von Prüfungen vor jedem Git-Commit
| GitHub Actions	| Automatische Ausführung der Tests im Rahmen der CI/CD-Pipeline

---
# CI/CD
- GitHub Actions wird für die automatische Ausführung der Testpipeline verwendet.
- Die Pipeline startet automatisch bei jedem Push und Pull Request auf den main-Branch.
- Die benötigten Abhängigkeiten und Playwright-Browser werden automatisch installiert.
- Anschließend werden alle Playwright-Tests ausgeführt.

# Reporting
- Playwright erstellt automatisch einen HTML-Testreport. 
- Der Report wird nach jedem Workflow-Lauf als GitHub-Artifact gespeichert und kann heruntergeladen werden.
- --> Letzter Report: https://github.com/bebakouh/SauceDemo/actions/runs/29518693578/artifacts/8383808236

# Stabilität und Wartbarkeit
- Verwendung von npm ci für reproduzierbare Installationen.
- Klare Trennung der einzelnen Pipeline-Schritte.
- Automatische Ausführung bei Codeänderungen.
- Playwright-Browser werden in der Pipeline automatisch installiert.

# Projektstruktur BDD
Die Tests wurden nach dem BDD-Ansatz strukturiert:

features
│
├── login.feature
├── products.feature
├── cart.feature
├── checkout.feature
│
├── step-definitions
│   ├── login.steps.ts
│   ├── products.steps.ts
│   ├── cart.steps.ts
│   └── checkout.steps.ts
│
└── support
    ├── world.ts
    └── hooks.ts

Für die Ergebnisdarstellung wird das integrierte Cucumber HTML Reporting verwendet.

Abgedeckte BDD Szenarien
Login
- Erfolgreicher Login
Produkte
- Produktliste anzeigen
- Produkt zum Warenkorb hinzufügen
- Produkt entfernen
- Warenkorb Badge prüfen
Warenkorb
- Produkt vorhanden
- Zur Produktübersicht zurückkehren
- Checkout starten
Checkout
- Pflichtfelder prüfen
- Bestellung erfolgreich abschließen
- Übersicht prüfen
- Bestellung bestätigen
