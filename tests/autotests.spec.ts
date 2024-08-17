import { test } from '@playwright/test';
import { MainPage } from "./project/pages/MainPage";
import { ProductsPage } from "./project/pages/ProductsPage";
import { ProductDetailsPage } from './project/pages/ProductDetailsPage';
import { OrederPage } from './project/pages/OrderPage';
test('Buy a product and check that request was created', async ({ page }) => {

  const mainPage = new MainPage(page);
  const productsPage = new ProductsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const orederPage = new OrederPage(page);

  await mainPage.navigateToMainPage();
  await mainPage.selectLenguage();
  await mainPage.confirmYourCity();
  await mainPage.selectProduct("Монітори та ТВ", "Samsung");
  await productsPage.selectFilters("Наявність у магазинах", "Акція");
  await productsPage.selectFilters("Роздільна здатність", "Full HD (1920x1080)");
  await productsPage.showResults();
  await productsPage.selectItemByPosition(0);
  await productDetailsPage.placeOrder();
  await productDetailsPage.buyProduct();
  await orederPage.setContactInfo({
    firstName: "John",
    lastName: "Dee",
    middleName: "Hilbertovich",
    phone: "971010110",
    email: "john.dee@gmail.com"
  });
});