import { Page } from 'playwright';

export class OrederPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };
    async setContactInfo(contactData: {
        firstName: string;
        lastName: string;
        middleName: string;
        phone: string;
        email: string;
    }) {
        await this.page.locator("//input[@name='last_name']").fill(contactData.firstName);
        await this.page.locator("//input[@name='first_name']").fill(contactData.lastName);
        await this.page.locator("//input[@name='middle_name']").fill(contactData.middleName);
        await this.page.locator("//input[@name='phone']").fill(contactData.phone);
        await this.page.locator("//input[@name='email']").fill(contactData.email);
    }
};