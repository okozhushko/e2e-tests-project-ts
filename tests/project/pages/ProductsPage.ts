import { Page } from "playwright";
import { ProductsPageLocators } from '../locators/ProductsPageLocators';


export class ProductsPage {
    private page: Page;
    private productsPageLocators: ProductsPageLocators;


    constructor(page: Page) {
        this.page = page;
        this.productsPageLocators = new ProductsPageLocators(page);

    };

    async selectFilters(filterCategory: string, filter: string) {
        const filterCategoryLocator = this.page.locator(
            `//div[@class="filter-item__head" and contains(text(), "${filterCategory}")]`);

        const isExpanded = await filterCategoryLocator.getAttribute(
            "aria-expanded");

        if (isExpanded === "false") {
            await this.page.locator(`//*[@data-bs-target and text() = ${filterCategory}]`).first().click();
        }
        await this.page
            .locator(`(//label[text()="${filter}"])[1]/parent::div/label`)
            .click();
    };

    async showResults() {
        await this.productsPageLocators.showResultsBtn.click();
    };
    async selectItemByPosition(position: number) {
        const allItems = await this.productsPageLocators.productItemsList.all();
        allItems[position].click();
    };
};
