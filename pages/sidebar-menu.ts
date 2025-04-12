import { Page , expect} from '@playwright/test';

export class Menu {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openSchoolsPage() {
    await this.page.getByRole('link', { name: 'Школи' }).click();
}

  async openSupportServicePage() {
    await this.page.getByRole('link', {name: 'Служба підтримки'}).click();
  }

  async openSchoolManagementDropdown() {
    await this.page.getByText('Керування школою').click();
  }

  async openPlatformNewsPage() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Новини платформи').click();
  }

  async openUsersPage() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Користувачі').click();
  }

  async openDocumentTemplatesPage() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Шаблони документів').click();
  }

  async openSchoolDocumentsPage() {
    await this.openSchoolManagementDropdown();
    await this.page.getByText('Документи школи').click();
  }

  async openMainPage(){
    await this.page.getByRole('link', { name: 'Головна сторінка' }).click();
  }

  async openJournalPage(){
    await this.page.locator('#sidebar').getByRole('link', { name: 'Журнали' }).click()
  }

  async openSchedulePage(){
    await this.page.getByRole('listitem').filter({ hasText: 'Розклад' }).first().click();
  }

  async openCalendarPage(){
    await this.page.getByRole('link', { name: 'Календар подій' }).click()
   } 
  
   async openPupilsDropdown() {
    const button = this.page.getByRole('button', { name: 'Учні' });
    const isExpanded = await button.getAttribute('aria-expanded');
  
    if (isExpanded !== 'true') {
      await button.click();
      await this.page.waitForSelector('#submenu-pupil'); // ждем пока подменю появится
    }
  }
  
  async openPupilsListPage() {
    await this.openPupilsDropdown();
    const listLink = this.page.getByRole('link', { name: 'Список учнів' });
    await expect(listLink).toBeVisible();
    await listLink.click();
  }
  
  async openPupilsSchedulePage() {
    await this.openPupilsDropdown();
    const scheduleLink = this.page.locator('#submenu-pupil li').filter({ hasText: 'Розклад учнів' });
    await expect(scheduleLink).toBeVisible();
    await scheduleLink.click();
  }}