import {test, expect, request, APIRequestContext } from '@playwright/test';
const urlList = [];

const findDuplicates = (list) => {
    const duplicates = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i] === list[j]) {
          duplicates.push(list[i]);
        }
       
      }
    }
    if(duplicates.length>0){
    return duplicates;}
    else{
        console.log("No Duplicates");
    }
    
  };

test('api request test', async () => {
const apiRequestContext = await request.newContext();
for (let i = 1; i <= 10; i++) {
const response =    await apiRequestContext.get('https://dog.ceo/api/breeds/image/random');
const responseCode = await response.status();
expect(response.status()).toBe(200);
console.log(i);
const responseBody = JSON.parse(await response.text());
console.log(responseBody);
urlList.push(responseBody.message);
await expect(responseBody.status).toBe("success");
}
console.log(urlList);
const duplicates = findDuplicates(urlList);
console.log(duplicates); 
});