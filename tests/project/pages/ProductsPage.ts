import { Page } from "playwright";
import { ProductsPageLocators } from '../locators/ProductsPageLocators';

export class ProductsPage {
    placeOrder() {
      throw new Error('Method not implemented.');
    }
    buyProduct() {
      throw new Error('Method not implemented.');
    }
    private page: Page;
    private productsPageLocators: ProductsPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.productsPageLocators = new ProductsPageLocators(page);
    }

    async selectFilters(filterCategory: string, filter: string) {
        const filterCategoryLocator = this.productsPageLocators.filterCategoryLocator(filterCategory);

        const isExpanded = await filterCategoryLocator.getAttribute("aria-expanded");

        if (isExpanded === "false") {
            await this.productsPageLocators.categoryDropdown(filterCategory)  // Використання методу з ProductsPageLocators
                .first()
                .click();
        }

        await this.productsPageLocators.filterItemCheckbox(filter)  // Використання методу з ProductsPageLocators
            .click();
    }

    async showResults() {
        await this.productsPageLocators.showResultsBtn.click();
    }

    async selectItemByPosition(position: number) {
        const allItems = await this.productsPageLocators.productItemsList.all();
        allItems[position].click();
    }
}
