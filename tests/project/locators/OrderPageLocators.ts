import { Page } from "playwright";

class OrderPageLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    };
}