import { Page } from 'playwright';

export class ProductDetailsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async buyProduct() {
        await this.page.locator("//div[@class='bag-total']//a").click();
    };

    async placeOrder() {
        await this.page.locator("//div[@class='card-block__price--sticky']//a").click();
    };

};

