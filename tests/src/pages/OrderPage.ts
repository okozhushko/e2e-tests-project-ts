import { Page, Locator } from 'playwright';
import { OrderPageLocators } from '../locators/OrderPageLocators';


export class OrederPage {
    private page: Page;
    private orderPageLocators: OrderPageLocators;


    constructor(page: Page) {
        this.page = page;
        this.orderPageLocators = new OrderPageLocators(page);
    };
    async setContactInfo(contactData: {
        firstName: string;
        lastName: string;
        middleName: string;
        phone: string;
        email: string;
    }) {
        await this.orderPageLocators.firstNameFld.fill(contactData.firstName); //FIX or command+z
        await this.orderPageLocators.lastNameFld.fill(contactData.lastName);
        await this.orderPageLocators.middleNameFld.fill(contactData.middleName);
        await this.orderPageLocators.phoneNumberFld.fill(contactData.phone);
        await this.orderPageLocators.emailAddressFld.fill(contactData.email);
    }
};