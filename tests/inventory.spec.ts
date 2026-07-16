import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Phase 2 - Produkte Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        const loginPage = new LoginPage(page);

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

    });

    test('TF-PRODUKT-001 - Produktliste wird angezeigt', async ({ page }) => {

        const inventory = new InventoryPage(page);

        await expect(page).toHaveURL(/inventory.html/);

        await inventory.verifyInventoryLoaded();

    });

    test('TF-PRODUKT-002 - Produkt zum Warenkorb hinzufügen', async ({ page }) => {

        const inventory = new InventoryPage(page);

        await inventory.addBackpackToCart();

        await expect(inventory.backpackRemoveButton)
            .toBeVisible();

    });

    test('TF-PRODUKT-003 - Produkt aus dem Warenkorb entfernen', async ({ page }) => {

        const inventory = new InventoryPage(page);

        await inventory.addBackpackToCart();

        await inventory.removeBackpackFromCart();

        await expect(inventory.backpackAddButton)
            .toBeVisible();

    });

    test('TF-PRODUKT-004 - Warenkorb-Badge zählt korrekt', async ({ page }) => {

        const inventory = new InventoryPage(page);

        await inventory.addBackpackToCart();

        await expect(inventory.cartBadge)
            .toHaveText('1');

    });

});