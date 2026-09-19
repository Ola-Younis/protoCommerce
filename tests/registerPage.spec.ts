import { test , expect} from "@playwright/test"
import { registerPage } from "./registerPage.ts";

test.use({
  launchOptions : {slowMo :1300},
})


test("Register and add two items to cart", async ({ page }) => {

  const register =new registerPage(page);
  await register.open();
  
    // Register user
    await register.fillName("Ola Younis");
    await register.fillEmail("ola@test.com");
    await register.fillPassword("Password123");
    await register.checkTerms();
    await register.selectGender("Female");
    await register.selectEmployed();

    await register.submit();

    // Verify registration succeeded
    await register.verifySuccessMessage();

    // Navigate to Shop
    await register.shopLink.click();

    // Add iPhone X
    await register.addIphone();

    // Add Nokia Edge
    await register.addNokia();

    // Verify checkout/c count
    await expect(register.checkOut).toContainText("2");
  });

