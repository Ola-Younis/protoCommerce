import { type Page , test , Locator ,Expect, expect} from "@playwright/test";
import { protoCommerce } from "./protoCommerce.ts";

export class registerPage extends protoCommerce{

    //Locators

  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly genderSelect: Locator;
  readonly employedCheckbox: Locator;
 // readonly dateOfBirthInput: Locator;
  readonly submitButton : Locator;
  readonly successMessage : Locator;
  readonly shopLink : Locator;
  readonly iphoneX : Locator;
  readonly nokiaEdge : Locator;
  readonly addButton : Locator;
  readonly checkOut : Locator;


    constructor (page : Page){
        super(page);

    this.nameInput = page.locator('input.form-control[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.getByPlaceholder("Password");
    this.termsCheckbox = page.getByRole("checkbox");
    this.genderSelect = page.getByLabel("Gender");
    this.employedCheckbox = page.getByLabel("Employed");
    //this.dateOfBirthInput = page.getByPlaceholder("MM/DD/YYYY");  
    this.submitButton = page.getByRole("button" ,{ name : "Submit"});
    this.successMessage = page.getByText("Success! The Form has been submitted successfully!.");
    this.shopLink = page.getByRole("link", {name : "Shop"});
    this.iphoneX = page.locator("app-card").filter({hasText : "iphone X"});
    this.nokiaEdge = page.locator("app-card").filter({hasText : "Nokia Edge"});
    this.addButton = page.getByRole("button" , {name : "Add"});
    //this.checkOut = page.getByRole("button", { name: "Checkout" });
    this.checkOut = page.locator("a.nav-link.btn.btn-primary").filter({ hasText: "Checkout" });
    }
  
  override async open(): Promise<void> {
    await super.open();
  }


  // Actions
  
 async fillName (name: string): Promise<void>{
    await this.nameInput.fill(name);
  }

  async fillEmail(email : string): Promise<void>{
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async checkTerms(): Promise<void> {
    await this.termsCheckbox.check();
  }

  async selectGender(gender: string): Promise<void> {
    await this.genderSelect.selectOption(gender);
  }

  async selectEmployed(): Promise<void> {
    await this.employedCheckbox.click();
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

   async verifySuccessMessage(): Promise<void> {
  await expect(this.successMessage).toBeVisible();
  }
  async addIphone(): Promise<void> {
    await this.iphoneX.getByRole("button", { name: "Add" }).click();
  }

  async addNokia(): Promise<void> {
    await this.nokiaEdge.getByRole("button", { name: "Add" }).click();
  }

  async checkout(): Promise<void> {
    await this.checkOut.click();
  }

}
