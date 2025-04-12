import { test, expect } from '@playwright/test';
import { Menu } from '../pages/sidebar-menu';
import { LoginToDev } from '../pages/login';

test.describe('Навігація по меню', () => {
  let menu: Menu;

  test.beforeEach(async ({ page }) => {
    menu = new Menu(page);
    await page.goto('/');
  });

  test('Перевірка завантаження розділу Школи', async ({ page }) => {
    await menu.openSchoolsPage();
    await expect(page.getByRole('link', { name: 'Сервери' })).toBeVisible();
  });

  test('Перевірка завантаження розділу Служба підтримки', async ({ page }) => {
    await menu.openSupportServicePage();
    await expect(page.getByLabel('breadcrumbs').getByText('Служба підтримки')).toBeVisible();
  });

  test('Перевірка завантаження розділу Новини платформи', async ({ page }) => {
    await menu.openPlatformNewsPage();
    await expect(page.locator('text=Додати')).toBeVisible();
  });

  test('Перевірка завантаження розділу Користувачі', async ({ page }) => {
    await menu.openUsersPage();
    await expect(page.locator('text=Керування користувачами')).toBeVisible();
  });

  test('Перевірка завантаження розділу Шаблони документів', async ({ page }) => {
    await menu.openDocumentTemplatesPage();
    await expect(page.locator('text=файл')).toBeVisible();
  });

  test('Перевірка завантаження розділу Документи школи', async ({ page }) => {
    await menu.openSchoolDocumentsPage();
    await expect(page.locator('text=Номер договору')).toBeVisible();
  });

  test("Перевірка завантаження розділу Головна сторінка", async({page})=>{
    await menu.openMainPage()
    await expect(page.locator('#message')).toBeVisible();
  })

  test("Перевірка завантаження розділу Журналів", async({page})=>{
    await menu.openJournalPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Журнали')).toBeVisible()
  })

  test("Перевірка завантаження розділу Розкладу", async({page})=>{
    await menu.openSchedulePage()
    await expect(page.getByLabel('breadcrumbs').getByText('Розклад')).toBeVisible()
  })

  test("Перевірка завантаження розділу Календару подій", async({page})=>{
    await menu.openCalendarPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Календар подій')).toBeVisible()
  })

  test("Перевірка відкриття дропдауну Учнів", async({page})=>{
    await menu.openPupilsDropdown()
    await Promise.all([
      expect(page.getByRole('link').getByText('Список учнів')).toBeVisible(),
      expect(page.getByRole('link').getByText('Розклад учнів')).toBeVisible(),
    ]);
    
  })

  test("Перевірка завантаження сторінки Список Учнів", async({page})=>{
    await menu.openPupilsListPage()
    await expect(page.locator('.panel')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Розклад Учнів", async({page})=>{
    await menu.openPupilsSchedulePage()
    await expect(page.locator('div').filter({ hasText: 'Головна/Розклад учнів' }).nth(3)).toBeVisible()
  })

  test("Перевірка відкриття дропдауну Вчителі", async({page})=>{
    await menu.openTeachersDropdown()
    await Promise.all([
      expect(page.getByRole('link').getByText('Список вчителів')).toBeVisible(),
      expect(page.getByRole('link').getByText('Відвідування')).toBeVisible(),
      expect(page.getByRole('link').getByText('Заміни')).toBeVisible(),
      expect(page.getByRole('link').getByText('Заповнення уроків')).toBeVisible(),

    ]);
  })

  test("Перевірка завантаження сторінки Список Вчителів", async({page})=>{
    await menu.openTeachersListPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Список вчителів')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Відвідування", async({page})=>{
    await menu.openVisitListPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Відвідування')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Заміни", async({page})=>{
    await menu.openTeachersChangeListPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Заміни')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Заповнення уроків", async({page})=>{
    await menu.openContentLessonPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Заповнення уроків')).toBeVisible()
  })

  test("Перевірка відкриття дропдауну Навчання", async({page})=>{
    await menu.openLearningDropdown()
    await Promise.all([
      expect(page.getByRole('link').getByText('Розклад кабінетів')).toBeVisible(),
      expect(page.getByRole('link').getByText('Розклад класу')).toBeVisible(),
    ]);
  })

  test("Перевірка завантаження сторінки Розкладу кабінетів", async({page})=>{
    await menu.openCabinetSchedulePage()
    await expect(page.getByLabel('breadcrumbs').getByText('Розклад кабінетів')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Розкладу класу", async({page})=>{
    await menu.openClassSchedulePage()
    await expect(page.getByLabel('breadcrumbs').getByText('Розклад класу')).toBeVisible()
  })

  test("Перевірка завантаження сторінки Оголошення", async({page})=>{
    await menu.openNotificationsPage()
    await expect(page.getByLabel('breadcrumbs').getByText('Оголошення')).toBeVisible()
  })

  test("Перевірка відкриття дропдауну Статистика", async ({ page }) => {
    await menu.openStatisticsDropdown();
    await Promise.all([
      expect(page.getByRole('listitem').filter({ hasText: 'Учні' }).nth(2)).toBeVisible(),
      expect(page.getByRole('link').getByText('Вчителі')).toBeVisible(),
      expect(page.getByRole('link').getByText('Відвідування учнів (з причиною)')).toBeVisible(),
      expect(page.getByRole('link').getByText('Відвідування учнів (по днях)')).toBeVisible(),
      expect(page.getByRole('link').getByText('Відвідування працівників')).toBeVisible(),
      expect(page.getByRole('link').getByText('Звіти по класах')).toBeVisible(),
    ]);
  });
  
  test("Перевірка завантаження сторінки Учні", async ({ page }) => {
    await menu.openPupilsStatisticsPage();
    await expect(page.getByLabel('breadcrumbs').getByText('Учні')).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Вчителі", async ({ page }) => {
    await menu.openTeachersStatisticsPage();
    await expect(page.getByLabel('breadcrumbs').getByText('Вчителі')).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Відвідування учнів (з причиною)", async ({ page }) => {
    await menu.openPupilsAttendanceByReasonPage();
    await expect(page.getByText('Відвідування та причини пропусків учнів')).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Відвідування учнів (по днях)", async ({ page }) => {
    await menu.openPupilsAttendanceByDaysPage();
    await expect(page.getByRole('link', { name: 'Відвідування учнів (по днях)' })).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Відвідування працівників", async ({ page }) => {
    await menu.openEmployeesAttendancePage();
    await expect(page.getByLabel('breadcrumbs').getByText('Відвідування працівників')).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Звіти по класах", async ({ page }) => {
    await menu.openClassReportsPage();
    await expect(page.getByLabel('breadcrumbs').getByText('Звіти по класах')).toBeVisible();
  });

  test("Перевірка завантаження сторінки Налаштування", async ({ page }) => {
    await menu.openSettingsPage();
    await expect(page.getByLabel('breadcrumbs').getByText('Налаштування')).toBeVisible();
  });
  
  test("Перевірка завантаження сторінки Довідник", async ({ page }) => {
    await menu.openNotebookPage();
    await expect(page.getByRole('heading', { name: 'Довідник' })).toBeVisible();
  });

  test("Перевірка завантаження модального вiкна Служби пiдтримка", async ({ page }) => {
    await menu.openSupportModal();
    await expect(page.getByRole('heading', { name: 'Служба підтримки Мрії' })).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();

  });

})
