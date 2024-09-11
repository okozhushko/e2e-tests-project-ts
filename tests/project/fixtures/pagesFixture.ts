import { MainPage } from '../pages/MainPage';
import { OrderPage } from '../pages/OrderPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { ProductsPage } from '../pages/ProductsPage';
import { test as base } from './baseFixture';

type Pages = {
    mainPage: MainPage,
    orderPage: OrderPage,
    productsPage: ProductsPage,
    productDetailsPage: ProductsPage
}

export const test = base.extend<Pages>({
    productsPage: async ({ page }: any, use: (arg0: ProductsPage) => any) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
    mainPage: async ({ page }: any, use: (arg0: MainPage) => any) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
    orederPage: async ({ page }: any, use: (arg0: OrderPage) => any) => {
        const orederPage = new OrderPage(page);
        await use(orederPage);
    },
    productDetailsPage: async ({ page }: any, use: (arg0: ProductDetailsPage) => any) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    }
})