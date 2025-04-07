const { chromium } = require('@playwright/test');
const { configDev } = require('./configs/config');

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(configDev.baseURL);
  await page.getByRole('link', { name: 'Увійти через ID.GOV.UA' }).click();
  await page.getByRole('textbox', { name: 'Enter identity' }).fill(configDev.login);
  await page.getByRole('textbox', { name: 'Пароль' }).fill(configDev.password);
  await page.getByRole('button', { name: 'Увійти' }).click();

  await page.waitForURL(configDev.baseURL);

  await page.context().storageState({ path: './storageState.json' });

  await browser.close();
}

module.exports = globalSetup;
