import { defineConfig, devices } from '@playwright/test';

const environment = process.env.ENVIRONMENT || 'dev';

const baseURLs = {
  dev: 'https://mriia-dev-webapp.azurewebsites.net/',
  stage: 'https://mriia-stage-webapp.azurewebsites.net/',
};

export default defineConfig({
  globalSetup: './global-setup.js',
  testDir: './tests',
  retries: 1,
  workers: process.env.CI ? 4 : undefined, // ⚡️ ускоряем на CI, локально авто
  timeout: 30 * 1000,

  use: {
    baseURL: baseURLs[environment],
    storageState: './storageState.json',
    headless: true,
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'off' : 'retain-on-failure', // ⚡️ на CI отключаем видео для passed тестов
    trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry', // на CI чуть подробнее
    actionTimeout: 5000,
    navigationTimeout: 10000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // ⚠️ Firefox убираем, только Chrome
  ],

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      screenshots: true,
      videos: true,
    }],
  ],
});
