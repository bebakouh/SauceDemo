import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    readonly cartItem: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    readonly cartTitle: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartTitle = page.locator('.title');
        this.cartItem = page.locator('.cart_item');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.checkoutButton = page.locator('#checkout');
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async verifyCartLoaded() {
        await expect(this.cartTitle).toHaveText('Your Cart');
    }
}