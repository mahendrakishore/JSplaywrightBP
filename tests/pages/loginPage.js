exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.userName = page.getByPlaceholder('Username');
        this.passWord = page.getByPlaceholder('Password');
        this.login    = page.locator('[data-test="login-button"]');
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
        
    }
     async loginWithIdPass(username,password){
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.login.click();
        
     }
    
}

