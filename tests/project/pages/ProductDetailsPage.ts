import { Page } from 'playwright';
import { ProductDetailsPageLocators } from '../locators/ProductDetailsPageLocators';

export class ProductDetailsPage {
    private page: Page;
    private productDetailsPageLocators: ProductDetailsPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.productDetailsPageLocators = new ProductDetailsPageLocators(page);
    };

    async buyProduct() {
        await this.productDetailsPageLocators.buyProductBtn.click();
    };

    async placeOrder() {
        await this.productDetailsPageLocators.itemPlaceOrder.click();
    };

};

