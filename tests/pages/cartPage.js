exports.CartPage = class CartPage{

    constructor(page){
        this.page = page;
        this.checkout = page.locator('[data-test="checkout"]');
               
    }

    async clickOnCheckout(){
        await this.checkout.click();
        
    }
}

