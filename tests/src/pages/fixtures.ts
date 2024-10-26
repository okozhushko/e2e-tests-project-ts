import { test as base, Page } from '@playwright/test';
import { MainPage } from "./MainPage";
import { ProductsPage } from "./ProductsPage";
import { ProductDetailsPage } from './ProductDetailsPage';
import { OrederPage } from './OrderPage';
import { faker } from '@faker-js/faker'

// Розширюємо базовий тест, додаючи кастомні фікстури для сторінок та випадкових даних
export const test = base.extend<{
  mainPage: MainPage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
  orderPage: OrederPage;
  contactInfo: {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    phone: string;
  };
}>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrederPage(page));
  },
  contactInfo: async ({}, use) => {
    const contactInfo = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      middleName: faker.person.middleName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };
    await use(contactInfo);
  },
});

export { expect } from '@playwright/test';
