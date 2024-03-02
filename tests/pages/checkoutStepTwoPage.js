exports.CheckoutStetpTwoPage = class CheckoutStetpTwoPage {

    constructor(page){
        this.page = page;
        this.productPrice = page.getByText('Item total: $');
        this.productTax = page.getByText('Tax: $');
        this.productTotal = page.getByText('Total: $');
        this.finish =  page.locator('[data-test="finish"]');
        
        
    }

    
       async  calculatePercent(num, percent) {
        console.log( (num / 100) * percent);
        return (num / 100) * percent;
      }
 
     async  getProductPrice(){
        const ppValue  = await this.productPrice.textContent();
        console.log(ppValue);
        return ppValue;
      }
      async  getProducTax(){
        const ptValue  = await this.productTax.textContent();
        console.log(ptValue);
        return ptValue;
      }
      async  getProductPriceWithTax(){
        const pptValue  = await this.productTotal.nth(1).textContent();
        console.log(pptValue);
        return pptValue;
      }

      async  getProductPriceWithTax(){
        const pptValue  = await this.productTotal.nth(1).textContent();
        console.log(pptValue);
        return pptValue;
      }

     async comparePercentage(online,calculated){
      if(online==calculated){
        return console.log("online percentage : "+online+" = "+"calculated percentage : "+ calculated);
      }
      else{
        return console.log("online percentage : "+online+" NOT EQUAL "+"calculated percentage : "+ calculated);
      }
     }
     async compareAllTotal(pp,pt,ppt){
      const pppt = parseFloat((pt+pp).toFixed(2))
      console.log(pppt);
      if(pppt==ppt){
        return console.log("product price : "+pp+" +  product tax : "+pt+" = "+ppt+" and total is correct : "+ppt);
      }
      else{
        return console.log("product price and product tax total is correct");
      }
     }


    async  clickOnFinish(){
        await this.finish.click();
    }
}

