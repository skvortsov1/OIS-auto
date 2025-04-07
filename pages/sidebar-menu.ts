import { Page } from '@playwright/test';

export class Menu {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openSchools() {
    await this.page.getByRole('link', { name: 'Школи' }).click();
}

  async openSupportService() {
    await this.page.getByRole('link', {name: 'Служба підтримки'}).click();
  }

  async openSchoolManagementDropdown() {
    await this.page.getByText('Керування школою').click();
  }

  async openPlatformNews() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Новини платформи').click();
  }

  async openUsers() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Користувачі').click();
  }

  async openDocumentTemplates() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Шаблони документів').click();
  }

  async openSchoolDocuments() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Документи школи').click();
  }

  async openMainPage(){
    await this.page.getByRole('link', { name: 'Головна сторінка' }).click();
  }
}
