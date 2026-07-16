import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Phase 5 - Sorting Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');
  });

  test('TF-SORT-001 - Sort Name A-Z', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.sortBy('az');

    const names = await inventory.getProductNames();

    const expected = [...names].sort();

    expect(names).toEqual(expected);
  });

  test('TF-SORT-002 - Sort Name Z-A', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.sortBy('za');

    const names = await inventory.getProductNames();

    const expected = [...names].sort().reverse();

    expect(names).toEqual(expected);
  });

  test('TF-SORT-003 - Sort Preis aufsteigend', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.sortBy('lohi');

    const prices = await inventory.getProductPrices();

    const expected = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(expected);
  });

  test('TF-SORT-004 - Sort Preis absteigend', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await inventory.sortBy('hilo');

    const prices = await inventory.getProductPrices();

    const expected = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(expected);
  });
});
