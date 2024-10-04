import { Page } from "playwright";
import { MainPageLocators } from '../locators/MainPageLocators';

export class MainPage {
    private page: Page;
    private mainPageLocators: MainPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.mainPageLocators = new MainPageLocators(page);
    }

    async navigateToMainPage() {
        await this.page.goto("https://telemart.ua/");
    }

    async confirmYourCity() {
        await this.mainPageLocators.confirmCityBtn.click();
    }

    async selectLenguage() {
        await this.mainPageLocators.selectLenguageBtn.click();
    }

    async selectProduct(category: string, productItem: string) {
        const categoryTab = this.mainPageLocators.getCategoryTab(category);
        const productLink = this.mainPageLocators.getProductItem(productItem);

        await categoryTab.hover();
        await productLink.click();
    }
}
