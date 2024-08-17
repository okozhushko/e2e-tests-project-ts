import { Page } from "playwright";

class MainPageLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    };
}