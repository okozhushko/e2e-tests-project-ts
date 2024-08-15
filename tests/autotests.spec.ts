import { test, expect } from '@playwright/test';
import { MainPage } from "./project/pages/MainPage";
test('Buy a product and check that request was created', async ({ page }) => {

  const mainPage = new MainPage(page);

  await mainPage.navigateToMainPage();
  await mainPage.selectLenguage();
  await mainPage.confirmYourCity();
  await mainPage.selectProduct("Монітори та ТВ", "Samsung");
  await mainPage.selectFilters("Наявність у магазинах", "Готовий до відправлення");
  await mainPage.showResults();
});