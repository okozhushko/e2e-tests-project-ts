import { Page, Locator } from "playwright";

export class OrderPageLocators {
    page: Page;
    firstNameFld: Locator;
    lastNameFld: Locator;
    middleNameFld: Locator;
    phoneNumberFld: Locator;
    emailAddressFld: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameFld = this.page.locator("//input[@name='first_name']");
        this.lastNameFld = this.page.locator("//input[@name='last_name']");
        this.middleNameFld = this.page.locator("//input[@name='middle_name']");
        this.phoneNumberFld = this.page.locator("//input[@name='phone']");
        this.emailAddressFld = this.page.locator("//input[@name='email']");
    };
}