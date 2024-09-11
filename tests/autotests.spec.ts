import { test } from './project/fixtures/pagesFixture';
import { faker } from '@faker-js/faker';

test('Buy a product and check that request was created', async ({ mainPage, productsPage, productDetailsPage, orederPage }) => {
  const randomFirtsName = faker.person.firstName;
  const randomLastName = faker.person.lastName;
  const randomMiddleName = faker.person.middleName;
  const randomEmail = faker.internet.email;
  const randomPhone = faker.phone.number;

  mainPage.navigateToMainPage();
  mainPage.selectLenguage();
  mainPage.confirmYourCity();
  mainPage.selectProduct("Монітори та ТВ", "Samsung");
  productsPage.selectFilters("Наявність у магазинах", "Акція");
  productsPage.selectFilters("Роздільна здатність", "Full HD (1920x1080)");
  productsPage.showResults();
  productsPage.selectItemByPosition(0);
  productDetailsPage.placeOrder();
  productDetailsPage.buyProduct();
  orederPage.setContactInfo({
    firstName: randomFirtsName(),
    lastName: randomLastName(),
    middleName: randomMiddleName(),
    phone: randomPhone(),
    email: randomEmail()
  });
});