import { Page, Locator } from "playwright";

class ProductDetailsPageLocators {
    page: Page;
    confirmCityBtn: Locator;
    selectLenguageBtn: Locator;
    selectCategotyTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmCityBtn = this.page.getByRole('button', { name: 'Так, вірно' });
        this.selectLenguageBtn = this.page.getByRole('button', { name: 'Українська' });
    };
}