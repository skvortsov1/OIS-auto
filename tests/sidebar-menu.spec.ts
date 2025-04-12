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

  test("Перевірка відкриття сторінки Список Учнів", async({page})=>{
    await menu.openPupilsListPage()
    await expect(page.locator('.panel')).toBeVisible()
  })

  test("Перевірка відкриття сторінки Розклад Учнів", async({page})=>{
    await menu.openPupilsSchedulePage()
    await expect(page.locator('div').filter({ hasText: 'Головна/Розклад учнів' }).nth(3)).toBeVisible()
  })

});
