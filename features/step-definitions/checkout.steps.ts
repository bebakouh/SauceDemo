import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage';

let checkoutPage: CheckoutPage;

When('der Benutzer startet den Checkout', async function () {
  checkoutPage = new CheckoutPage(this.page);

  await checkoutPage.startCheckout();
});

When('der Benutzer bestätigt die Bestellung ohne Eingaben', async function () {
  await checkoutPage.clickContinue();
});

Then('wird eine Fehlermeldung angezeigt', async function () {
  await expect(checkoutPage.errorMessage).toBeVisible();
});

When('der Benutzer gibt seine Daten ein', async function () {
  await checkoutPage.fillCheckoutInformation('Max', 'Mustermann', '41061');
});

When('der Benutzer bestätigt die Bestellung', async function () {
  await checkoutPage.finishCheckout();
});

Then('wird die Bestellung abgeschlossen', async function () {
  await expect(checkoutPage.completeTitle).toHaveText('Thank you for your order!');
});
