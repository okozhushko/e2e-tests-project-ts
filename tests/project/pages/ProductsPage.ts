import { Page } from "playwright";

export class ProductsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
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
        await this.page.getByRole('link', { name: 'Показати' }).click();
    };
    async selectItemByPosition(position: number) {
        const allItems = await this.page.locator('//div[@class="product-item__col-pic"]//a').all();
        allItems[position].click();
    };
};
