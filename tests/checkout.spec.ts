import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Phase 4 - Checkout Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        const login = new LoginPage(page);
        await login.login('standard_user', 'secret_sauce');

        const inventory = new InventoryPage(page);
        await inventory.addBackpackToCart();

        const cart = new CartPage(page);
        await cart.openCart();
        await cart.clickCheckout();

    });

    test('TC-CHECKOUT-001 - Pflichtfelder prüfen', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.continueButton.click();

        await expect(checkout.errorMessage)
            .toHaveText('Error: First Name is required');

    });

    test('TC-CHECKOUT-002 - Erfolgreicher Checkout', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.fillCheckoutInformation(
            'Max',
            'Mustermann',
            '41061'
        );

        await checkout.finishCheckout();

        await expect(checkout.completeTitle)
            .toHaveText('Thank you for your order!');

    });

    test('TC-CHECKOUT-003 - Checkout Übersicht korrekt', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.fillCheckoutInformation(
            'Test',
            'Testing',
            '41065'
        );

        await expect(page).toHaveURL(/checkout-step-two.html/);

        await expect(checkout.overviewTitle)
            .toHaveText('Checkout: Overview');

        await expect(page.locator('.inventory_item_name'))
            .toHaveText('Sauce Labs Backpack');

    });

    test('TC-CHECKOUT-004 - Transaktion abschliessen', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.fillCheckoutInformation(
            'Test',
            'Testing',
            '41065'
        );

        await checkout.finishCheckout();

        await expect(page).toHaveURL(/checkout-complete.html/);

        await expect(checkout.completeTitle)
            .toHaveText('Thank you for your order!');

        await expect(page.locator('#back-to-products'))
            .toBeVisible();

    });

});