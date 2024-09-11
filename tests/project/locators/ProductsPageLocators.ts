import { Locator, Page } from "playwright";

export class ProductsPageLocators {
    page: Page;
    showResultsBtn: Locator;
    productItemsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.showResultsBtn = this.page.getByRole('link', { name: 'Показати' });
        this.productItemsList = this.page.locator('//div[@class="product-item__col-pic"]//a');
    }

    getCategoryTab(category: string): Locator {
        return this.page.getByRole('tab', { name: category });
    }

    getProductItem(productItem: string): Locator {
        return this.page.getByRole('link', { name: productItem }).first();
    }

    categoryDropdown(filterCategory: string): Locator {  // Використання аргументу filterCategory
        return this.page.locator(`//*[@data-bs-target and text()="${filterCategory}"]`);
    }

    filterItemCheckbox(filter: string): Locator {  // Використання аргументу filter
        return this.page.locator(`(//label[text()="${filter}"])[1]/parent::div/label`);
    }
    filterCategoryLocator(filterCategory: string): Locator {
        return this.page.locator(`//div[@class="filter-item__head" and contains(text(), "${filterCategory}")]`);
    }
};
