import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('TF-LOGIN-001 - Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory/);

    });

    test('TF-LOGIN-002 - Invalid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user', 'wrong_password');

        await expect(loginPage.errorMessage)
            .toContainText('Epic sadface: Username and password do not match any user in this service');

    });

    test('TF-LOGIN-003 - Invalid Username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('wrong_user', 'secret_sauce');

        await expect(loginPage.errorMessage)
            .toContainText('Epic sadface: Username and password do not match any user in this service');

    });

    test('TF-LOGIN-004 - Empty Username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('', 'secret_sauce');

        await expect(loginPage.errorMessage)
            .toHaveText('Epic sadface: Username is required');

    });

    test('TF-LOGIN-005 - Empty Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user', '');

        await expect(loginPage.errorMessage)
            .toHaveText('Epic sadface: Password is required');

    });

    test('TF-LOGIN-006 - Empty Username and Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('', '');

        await expect(loginPage.errorMessage)
            .toHaveText('Epic sadface: Username is required');

    });

    test('TF-LOGIN-007 - Locked User', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.errorMessage)
            .toContainText('Epic sadface: Sorry, this user has been locked out.');

    });

});