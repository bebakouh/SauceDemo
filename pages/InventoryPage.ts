import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;

    readonly inventoryList: Locator;
    readonly inventoryItems: Locator;
    readonly cartBadge: Locator;

    readonly backpackAddButton: Locator;
    readonly backpackRemoveButton: Locator;

    readonly sortDropdown: Locator;
    readonly itemNames: Locator;
    readonly itemPrices: Locator;

    constructor(page: Page) {

        this.page = page;

        this.inventoryList = page.locator('.inventory_list');
        this.inventoryItems = page.locator('.inventory_item');

        this.backpackAddButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack');

        this.cartBadge = page.locator('.shopping_cart_badge');

        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.itemNames = page.locator('.inventory_item_name');
        this.itemPrices = page.locator('.inventory_item_price');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async removeBackpackFromCart() {
        await this.backpackRemoveButton.click();
    }

    async verifyInventoryLoaded() {
        await expect(this.inventoryList).toBeVisible();
        await expect(this.inventoryItems).toHaveCount(6);
    }

    async sortBy(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async getProductNames(): Promise<string[]> {
        return await this.itemNames.allTextContents();
    }

    async getProductPrices(): Promise<number[]> {

        const prices = await this.itemPrices.allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
        }
}