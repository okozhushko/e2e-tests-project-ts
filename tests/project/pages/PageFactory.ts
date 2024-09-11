import { Page } from '@playwright/test';
import { MainPage } from './MainPage';
import { OrderPage } from './OrderPage';
import { ProductDetailsPage } from './ProductDetailsPage';
import { ProductsPage } from './ProductsPage';
export class PageFactory {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    getMainPage() {
        return new MainPage(this.page);
    }
    getOrderPage() {
        return new OrderPage(this.page);
    }
    getProuctDetailsPage() {
        return new ProductDetailsPage(this.page);
    }
    getProductsPage() {
        return new ProductsPage(this.page);
    }
}