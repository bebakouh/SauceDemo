import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('der Benutzer ist erfolgreich eingeloggt', async function () {
  loginPage = new LoginPage(this.page);
  inventoryPage = new InventoryPage(this.page);

  await this.page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');
});

Then('wird die Produktübersicht angezeigt', async function () {
  const inventoryPage = new InventoryPage(this.page);

  await inventoryPage.verifyInventoryLoaded();
});

When('der Benutzer fügt das Produkt {string} zum Warenkorb hinzu', async function (productName: string) {
  await inventoryPage.addProduct(productName);
});

Then('wird das Warenkorb Badge mit {string} angezeigt', async function (count: string) {
  await expect(inventoryPage.cartBadge).toHaveText(count);
});

When('der Benutzer entfernt das Produkt {string}', async function (productName: string) {
  await inventoryPage.removeProduct(productName);
});

Then('ist das Warenkorb Badge nicht sichtbar', async function () {
  await expect(inventoryPage.cartBadge).not.toBeVisible();
});
