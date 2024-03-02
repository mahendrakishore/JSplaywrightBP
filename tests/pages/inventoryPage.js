exports.InventoryPage = class InventoryPage{

    constructor(page){
        this.page = page;
        this.addTocart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cartIcon = page.locator('#shopping_cart_container a');
               
    }

    async addProduct(){
        await this.addTocart.click();
        
    }
     
    async clickOnCart(){
        await this.cartIcon.click();
        
    }
}

