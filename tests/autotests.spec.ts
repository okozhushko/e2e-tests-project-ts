import { test, expect } from '../tests/src/pages/fixtures';
import { faker } from '@faker-js/faker';

test('Buy a product and check that request was created', async ({ mainPage, productsPage, productDetailsPage, orderPage, contactInfo }) => {

  const randomFirtsName = faker.person.firstName;
  const randomLastName = faker.person.lastName;
  const randomMiddleName = faker.person.middleName;
  const randomEmail = faker.internet.email;
  const randomPhone = faker.phone.number;

  await mainPage.navigateToMainPage();
  await mainPage.selectLenguage();
  await mainPage.confirmYourCity();
  await mainPage.selectProduct("Монітори", "Samsung");
  await productsPage.selectFilters("Наявність у магазинах", "Акція");
  await productsPage.selectFilters("Роздільна здатність", "Full HD (1920x1080)");
  await productsPage.showResults();
  await productsPage.selectItemByPosition(0);
  await productDetailsPage.placeOrder();
  await productDetailsPage.buyProduct();
  await orderPage.setContactInfo({
    firstName: randomFirtsName(),
    lastName: randomLastName(),
    middleName: randomMiddleName(),
    phone: randomPhone(),
    email: randomEmail()
  });
});