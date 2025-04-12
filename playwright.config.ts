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
  timeout: 30 * 1000,
  use: {
    baseURL: baseURLs[environment],
    storageState: './storageState.json',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 5000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
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
