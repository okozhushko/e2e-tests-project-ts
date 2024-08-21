import { Page, Locator } from "playwright";

export class ProductDetailsPageLocators {
    page: Page;
    confirmCityBtn: Locator;
    selectLenguageBtn: Locator;
    selectCategotyTab: Locator;
    buyProductBtn: Locator;
    itemPlaceOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmCityBtn = this.page.getByRole('button', { name: 'Так, вірно' });
        this.selectLenguageBtn = this.page.getByRole('button', { name: 'Українська' });
        this.buyProductBtn = this.page.locator("//div[@class='bag-total']//a");
        this.itemPlaceOrder = this.page.locator("//div[@class='card-block__price--sticky']//a");
    };
}