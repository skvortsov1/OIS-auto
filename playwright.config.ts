import { defineConfig, devices } from '@playwright/test';

// Четкая типизация окружений
const baseURLs = {
  dev: 'https://mriia-dev-webapp.azurewebsites.net/',
  stage: 'https://mriia-stage-webapp.azurewebsites.net/',
} as const;

type Environment = keyof typeof baseURLs;
const environment: Environment = (process.env.ENVIRONMENT as Environment) || 'dev';

export default defineConfig({
  globalSetup: './global-setup.js',
  testDir: './tests',
  retries: 1,
  timeout: 60 * 1000,
  use: {
    baseURL: baseURLs[environment],
    storageState: './storageState.json',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
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
