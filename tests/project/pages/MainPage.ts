import { Page } from "playwright";
// import { Filters } from "./Filters";

export class MainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async navigateToMainPage() {
        await this.page.goto("https://telemart.ua/");
    }
    async confirmYourCity() {
        await this.page.getByRole('button', { name: 'Так, вірно' }).click();
    };

    async selectLenguage() {
        await this.page.getByRole('button', { name: 'Українська' }).click();
    };
    async selectProduct(category: string, productItem: string) {
        await this.page.getByRole('tab', { name: category }).hover();
        await this.page.getByRole('link', { name: productItem }).first().click();
    };

    async selectFilters(filterCategory: string, filter: string) {
        const filterCategoryLocator = this.page.locator(`//div[@class="filter-item__head" and contains(text(), "${filterCategory}")]`);
        const isExpanded = await filterCategoryLocator.getAttribute("aria-expanded");

        if (isExpanded === "false") {
            await this.page.locator(`//*[@data-bs-target and text() = ${filterCategory}]`).first().click();
        }
        await this.page.locator(`//label[text()="${filter}"]`).click();
    };

    async showResults() {
        await this.page.getByRole('link', { name: 'Показати' }).click();
    };
};
