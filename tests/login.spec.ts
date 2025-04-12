import { expect, test } from "@playwright/test";
import { LoginToDev} from '../pages/login';
import { configDev} from '../configs/config';




test.describe("loginToDev", ()=>{
    let loginDev: LoginToDev; 

    test.beforeEach(async ({ page }) => {
      loginDev = new LoginToDev(page); 
      await page.goto('/');
    })

    test("login to Dev", async({page})=>{
        await loginDev.signIn()
    })

})

