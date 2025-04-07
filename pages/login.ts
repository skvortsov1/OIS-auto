import { expect, Page } from "@playwright/test";
import { configDev} from "../configs/config.ts";


export class LoginToDev {
    readonly page: Page;
    readonly enterIdGovUA;

    constructor(page: Page) {
        this.page = page;
        this.enterIdGovUA = this.page.getByRole('link', { name: 'Увійти через ID.GOV.UA' });
    }

    async signIn() {
        const isLoginButtonVisible = await this.enterIdGovUA.isVisible();
      
        if (isLoginButtonVisible) {
          await this.enterIdGovUA.click();
          await this.page.getByRole('textbox', { name: 'Enter identity' }).fill(configDev.login);
          await this.page.getByRole('textbox', { name: 'Пароль' }).fill(configDev.password);
          await this.page.getByRole('button', { name: 'Увійти' }).click();
          await expect(
            this.page.getByRole('link').filter({ hasText: /^$/ })
          ).toBeVisible({ timeout: 5000 });
        } else {
          console.log('⏩ Skip');
        }
      }
      

}

