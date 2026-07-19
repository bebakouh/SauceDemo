import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';

let cartPage: CartPage;

When('der Benutzer öffnet den Warenkorb', async function () {
  cartPage = new CartPage(this.page);

  await cartPage.openCart();
});

Then('ist das Produkt {string} im Warenkorb sichtbar', async function (itemName: string) {
  await expect(cartPage.itemName).toHaveText(itemName);
});

Given('der Benutzer befindet sich im Warenkorb', async function () {
  cartPage = new CartPage(this.page);

  await cartPage.openCart();
});

When('der Benutzer geht zurück zur Produktübersicht', async function () {
  await cartPage.clickContinueShopping();
});

Then('wird die Checkout-Seite angezeigt', async function () {
  await expect(this.page.locator('.title')).toHaveText('Checkout: Your Information');
});
