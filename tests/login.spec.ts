import { expect, test } from "@playwright/test";
import { LoginToDev} from "../pages/login.ts";
import { configDev} from "../configs/config.ts";




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

