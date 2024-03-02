exports.CheckoutStetpOnePage = class CheckoutStetpOnePage {

    constructor(page){
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continue  = page.locator('[data-test="continue"]');
        
    }

     async loginFillDetails(fname,lname,pin){
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.postalCode.fill(pin);
        await this.continue.click();
        
     }
    
}

