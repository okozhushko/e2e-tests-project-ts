import { Locator, Page } from "playwright";

export class ProductsPageLocators {
    page: Page;
    showResultsBtn: Locator;
    productItemsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.showResultsBtn = this.page.getByRole('link', { name: 'Показати' });
        this.productItemsList = this.page.locator('//div[@class="product-item__col-pic"]//a');
    };
}