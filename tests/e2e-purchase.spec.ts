import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('End-to-End Purchase Flow', () => {
  test('E2E-001 - Kunde Kann die Bestellung erfolgreich abschließen', async ({ page }) => {
    // Website aufrufen

    await page.goto('https://www.saucedemo.com/');

    // Login erfolgreich

    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

    // Produkt hinzufügen

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.backpackRemoveButton).toBeVisible();

    // Warenkorb

    const cartPage = new CartPage(page);

    await cartPage.openCart();

    await expect(cartPage.cartItem).toHaveCount(1);

    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // Checkout

    await cartPage.clickCheckout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

    // Kundendaten eingeben

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutInformation('Test', 'Testing', '41065');

    await expect(page).toHaveURL(/checkout-step-two.html/);

    // Order Übersicht

    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // Bestellung abschließen

    await checkoutPage.finishCheckout();

    // Bestätigung

    await expect(page).toHaveURL(/checkout-complete.html/);

    await expect(checkoutPage.completeTitle).toHaveText('Thank you for your order!');
  });
});
