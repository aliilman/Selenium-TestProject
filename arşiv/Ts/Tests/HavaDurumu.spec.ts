import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';

import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

describe('HavaDurumu', function() {
  // this.timeout(30000);
  let driver: WebDriver;
  let vars: any;
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function() {
    await driver.quit();
  });
  it('HavaDurumu', async function() {
    await driver.get("https://www.mgm.gov.tr/");
    await driver.sleep(500);

    const hoverable: WebElement = await driver.findElement(By.className("meteor-tahminler"));
    const actions: Actions = driver.actions({ async: true });
    await actions.move({ origin: hoverable }).perform();

    await driver.findElement(By.linkText("İl ve İlçe Merkezleri Tahminleri")).click();

    await driver.sleep(500);

    await driver.findElement(By.id("txtsearch")).click();
    await driver.findElement(By.id("txtsearch")).sendKeys("İstanbul");

    await driver.findElement(By.id("txtsearch")).sendKeys(Key.DOWN);
    await driver.findElement(By.id("txtsearch")).sendKeys(Key.ENTER);

    await driver.sleep(500);

    await driver.findElement(By.id("cmbIlce")).click();
    {
      const dropdown: WebElement = await driver.findElement(By.id("cmbIlce"));
      await dropdown.findElement(By.xpath("//option[. = 'Esenyurt']")).click();
    }

   console.log( "Tarih:\t",await driver.findElement(By.css("tr:nth-child(1) > .ng-binding:nth-child(1)")) .getText() );
   console.log( "Durum:\t", await driver.findElement(By.css("tr:nth-child(1) > td:nth-child(2) > img")).getAttribute("title"));
   console.log( "En Düşük:\t", await driver.findElement(By.css("tr:nth-child(1) > .nTt")).getText()   );
   console.log( "En Yüksek\t",await driver.findElement(By.css("tr:nth-child(1) > .xTt")).getText());

   console.log("---------------------------------");

   console.log( "Tarih:\t", await driver.findElement(By.css("tr:nth-child(2) > .ng-binding:nth-child(1)")).getText());
   console.log( "Durum:\t",  await driver.findElement(By.css("tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2) > img")).getAttribute("title"));
   console.log( "En Düşük:\t", await driver.findElement(By.css("tr:nth-child(2) > .nTt")).getText());
   console.log( "En Yüksek\t", await driver.findElement(By.css("tr:nth-child(2) > .xTt")).getText());
   
   console.log("---------------------------------");
    
   console.log( "Tarih:\t", await driver.findElement(By.css("tr:nth-child(3) > .ng-binding:nth-child(1)")).getText());
   console.log( "Durum:\t", await driver.findElement(By.css("tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > img")).getAttribute("title"));
   console.log( "En Düşük:\t", await driver.findElement(By.css("tr:nth-child(3) > .nTt")).getText());
   console.log( "En Yüksek\t",await driver.findElement(By.css("tr:nth-child(3) > .xTt")).getText());
   
   console.log("---------------------------------");

   console.log( "Tarih:\t", await driver.findElement(By.css("tr:nth-child(4) > .ng-binding:nth-child(1)")).getText());
   console.log( "Durum:\t",  await driver.findElement(By.css("tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > img")).getAttribute("title"));
   console.log(  "En Düşük:\t",await driver.findElement(By.css("tr:nth-child(4) > .nTt")).getText());
   console.log( "En Yüksek\t",await driver.findElement(By.css("tr:nth-child(4) > .xTt")).getText());
   
   console.log("---------------------------------");

   console.log( "Tarih:\t", await driver.findElement(By.css("tr:nth-child(5) > .ng-binding:nth-child(1)")).getText());
   console.log( "Durum:\t", await driver.findElement(By.css("tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > img")).getAttribute("title"));
   console.log( "En Düşük:\t", await driver.findElement(By.css("tr:nth-child(5) > .nTt")).getText());
   console.log( "En Yüksek\t", await driver.findElement(By.css("tr:nth-child(5) > .xTt")).getText());
  

  //  await driver.actions()
  //  .scroll(100, 100, 10, 600)
  //  .perform();

   await driver.sleep(5000);
    await driver.close();
  });
})