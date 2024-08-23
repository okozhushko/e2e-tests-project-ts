import { Page, Locator } from "playwright";

export class MainPageLocators {
    page: Page;
    confirmCityBtn: Locator;
    selectLenguageBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmCityBtn = this.page.getByRole('button', { name: 'Так, вірно' });
        this.selectLenguageBtn = this.page.getByRole('button', { name: 'Українська' });
    }

    getCategoryTab(category: string): Locator {
        return this.page.getByRole('tab', { name: category });
    }

    getProductItem(productItem: string): Locator {
        return this.page.getByRole('link', { name: productItem }).first();
    }
}