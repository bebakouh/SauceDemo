import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Phase 3 - Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');

    const inventory = new InventoryPage(page);
    await inventory.addBackpackToCart();
  });

  test('TF-CART-001 - Produkt im Warenkorb vorhanden', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.openCart();

    await cart.verifyCartLoaded();

    await expect(cart.cartItem).toHaveCount(1);

    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

  test('TF-CART-002 - Zur Produktübersicht zurücknavigieren', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.openCart();

    await cart.clickContinueShopping();

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('TF-CART-003 - Checkout starten', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.openCart();

    await cart.clickCheckout();

    await expect(page).toHaveURL(/checkout-step-one.html/);

    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });
});
