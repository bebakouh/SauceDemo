import { Given, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
// import { InventoryPage } from '../../pages/InventoryPage';

let browser: Browser;
let page: Page;

let loginPage: LoginPage;
// let inventoryPage: InventoryPage;

Given('der Benutzer befindet sich auf der Login-Seite', async function () {
  browser = await chromium.launch();

  page = await browser.newPage();

  loginPage = new LoginPage(page);

  // inventoryPage = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com/');
});

When('er den Benutzernamen {string} eingibt', async function (username: string) {
  await loginPage.username.fill(username);
});

When('er das Passwort {string} eingibt', async function (password: string) {
  await loginPage.password.fill(password);
});

When('auf Login klickt', async function () {
  await loginPage.loginButton.click();
});
