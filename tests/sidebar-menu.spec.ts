import { test, expect } from '@playwright/test';
import { Menu } from '../pages/sidebar-menu';
import { LoginToDev } from '../pages/login';

test.describe('Навігація по меню', () => {
  let menu: Menu;

  test.beforeEach(async ({ page }) => {
    menu = new Menu(page);
    await page.goto('/');
  });

  test('Перехід до розділу Школи', async ({ page }) => {
    await menu.openSchools();
    await expect(page.getByRole('link', { name: 'Сервери' })).toBeVisible();
  });

  test('Перехід до розділу Служба підтримки', async ({ page }) => {
    await menu.openSupportService();
    await expect(page.getByLabel('breadcrumbs').getByText('Служба підтримки')).toBeVisible();
  });

  test('Перехід до розділу Новини платформи', async ({ page }) => {
    await menu.openPlatformNews();
    await expect(page.locator('text=Додати')).toBeVisible();
  });

  test('Перехід до розділу Користувачі', async ({ page }) => {
    await menu.openUsers();
    await expect(page.locator('text=Керування користувачами')).toBeVisible();
  });

  test('Перехід до розділу Шаблони документів', async ({ page }) => {
    await menu.openDocumentTemplates();
    await expect(page.locator('text=файл')).toBeVisible();
  });

  test('Перехід до розділу Документи школи', async ({ page }) => {
    await menu.openSchoolDocuments();
    await expect(page.locator('text=Номер договору')).toBeVisible();
  });

  test("Перехід до розділу Головна сторінка", async({page})=>{
    await menu.openMainPage()
    await expect(page.locator('#message')).toBeVisible();
  })
});
