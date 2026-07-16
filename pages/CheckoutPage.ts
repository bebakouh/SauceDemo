import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;

    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    readonly errorMessage: Locator;
    readonly overviewTitle: Locator;
    readonly completeTitle: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.cancelButton = page.locator('#cancel');

        this.errorMessage = page.locator('[data-test="error"]');

        this.overviewTitle = page.locator('.title');
        this.completeTitle = page.locator('.complete-header');
    }

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}