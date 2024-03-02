const { test, expect } = require('@playwright/test');
const { assert } = require('console');
const { parse } = require('path');
const { text } = require('stream/consumers');
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutStetpOnePage } from '../pages/checkoutStepOnePage';
import { CheckoutStetpTwoPage } from '../pages/checkoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';

  function convertStringToInt(s) {
  const sSplit = s?.split("$");
  console.log(sSplit);
  const sValue = sSplit?.[1];
  console.log(sValue);
  return Number(sValue);;
}

  
test('sauce demo', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkoutOne = new CheckoutStetpOnePage(page);
  const checkoutTwo = new CheckoutStetpTwoPage(page);
  const checkoutComplete = new CheckoutCompletePage(page);

  await login.gotoLoginPage();
  await expect(page).toHaveTitle('Swag Labs');
  await login.loginWithIdPass('standard_user','secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventory.addProduct();
  await inventory.clickOnCart();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await cart.clickOnCheckout();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  await checkoutOne.loginFillDetails('MAHENDRA','KISHORE','411045');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  const pp = await checkoutTwo.getProductPrice();
  const ppv = convertStringToInt(pp);
  const pt =  await checkoutTwo.getProducTax();
  const ptv = convertStringToInt(pt);
  const percentage = await checkoutTwo.calculatePercent(ppv,8);
  await checkoutTwo.comparePercentage(ptv,percentage);
  const ppt =  await checkoutTwo.getProductPriceWithTax();
  const pptv = convertStringToInt(ppt);
  await checkoutTwo.compareAllTotal(ppv,ptv,pptv);
  await checkoutTwo.clickOnFinish();
  
  const purchaseCofirmationtextExpected = 'Thank you for your order!';
  const purchaseCofirmationtextActual = await page.getByRole('heading', { name: 'Thank you for your order!' }).textContent();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(purchaseCofirmationtextActual).toEqual(purchaseCofirmationtextExpected);

   });

