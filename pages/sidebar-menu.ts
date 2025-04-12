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
      await this.page.waitForSelector('#submenu-pupil'); 
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
  }

  async openTeachersDropdown() {
    const button = this.page.getByRole('button', { name: 'Вчителі' });
    const isExpanded = await button.getAttribute('aria-expanded');
  
    if (isExpanded !== 'true') {
      await button.click();
    }
  }

  async openTeachersListPage(){
    this.openTeachersDropdown()
    const teachersListLink = this.page.getByRole('link', {name:'Список вчителів'})
    await expect(teachersListLink).toBeVisible()
    await teachersListLink.click()
  }

  async openVisitListPage(){
    this.openTeachersDropdown()
    const visitListLink = this.page.getByRole('link', {name:'Відвідування'})
    await expect(visitListLink).toBeVisible()
    await visitListLink.click()
  }

  async openTeachersChangeListPage(){
    this.openTeachersDropdown()
    const teachersChangeListLink = this.page.getByRole('link', {name:'Заміни'})
    await expect(teachersChangeListLink).toBeVisible()
    await teachersChangeListLink.click()
  }

  async openContentLessonPage(){
    this.openTeachersDropdown()
    const contentListLink = this.page.getByRole('link', {name:'Заповнення уроків'})
    await expect(contentListLink).toBeVisible()
    await contentListLink.click()
  }

  async openLearningDropdown() {
    const button = this.page.getByRole('button', { name: 'Навчання' });
    const isExpanded = await button.getAttribute('aria-expanded');
  
    if (isExpanded !== 'true') {
      await button.click();
    }
  }

  async openCabinetSchedulePage(){
    this.openLearningDropdown()
    const cabinetListLink = this.page.getByRole('link', {name:'Розклад кабінетів'})
    await expect(cabinetListLink).toBeVisible()
    await cabinetListLink.click()
  }

  async openClassSchedulePage(){
    this.openLearningDropdown()
    const classListLink = this.page.getByRole('link', {name:'Розклад класу'})
    await expect(classListLink).toBeVisible()
    await classListLink.click()
  }

  async openNotificationsPage(){
    await this.page.getByRole('link', { name: 'Оголошення' }).click();
  }

// Открыть дропдаун Статистика
async openStatisticsDropdown() {
  const button = this.page.getByRole('button', { name: 'Статистика' });
  const isExpanded = await button.getAttribute('aria-expanded');

  if (isExpanded !== 'true') {
    await button.click();
  }
}

// Переходы по страницам

async openPupilsStatisticsPage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('listitem').filter({ hasText: 'Учні' }).nth(2);
  await expect(link).toBeVisible();
  await link.click();
}

async openTeachersStatisticsPage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('link', { name: 'Вчителі' });
  await expect(link).toBeVisible();
  await link.click();
}

async openPupilsAttendanceByReasonPage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('link', { name: 'Відвідування учнів (з причиною)' });
  await expect(link).toBeVisible();
  await link.click();
}

async openPupilsAttendanceByDaysPage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('link', { name: 'Відвідування учнів (по днях)' });
  await expect(link).toBeVisible();
  await link.click();
}

async openEmployeesAttendancePage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('link', { name: 'Відвідування працівників' });
  await expect(link).toBeVisible();
  await link.click();
}

async openClassReportsPage() {
  await this.openStatisticsDropdown();
  const link = this.page.getByRole('link', { name: 'Звіти по класах' });
  await expect(link).toBeVisible();
  await link.click();
}


async openSettingsPage(){
  await this.page.getByRole('link', { name: 'Налаштування' }).click();
}

async openNotebookPage(){
  await this.page.getByRole('link', { name: 'Довідник' }).click();
}

async openSupportModal(){
  await this.page.locator('a').filter({ hasText: 'Служба підтримки' }).nth(1).click();
}
}

