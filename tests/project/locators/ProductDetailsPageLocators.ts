import { Page } from "playwright";

class ProductDetailsPageLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    };
}