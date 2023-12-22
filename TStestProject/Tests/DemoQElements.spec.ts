import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';

import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

describe('DEMOQElements', function() {
  let driver: WebDriver// driver türünü variyoruz
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('DEMOQElements', async function() {
    await driver.get("https://demoqa.com/text-box")
    await driver.sleep(500);

    await driver.findElement(By.id("item-0")).click()
    await driver.findElement(By.id("userName")).click()
    await driver.findElement(By.id("userName")).sendKeys("as")
    await driver.findElement(By.id("userEmail")).click()
    await driver.findElement(By.id("userEmail")).sendKeys("aa@example.com")
    await driver.findElement(By.id("currentAddress")).sendKeys("asdfghh")
    await driver.findElement(By.id("permanentAddress")).sendKeys("asdfghjkkl")
    await driver.findElement(By.id("submit")).click()
    await driver.sleep(100);

    await driver.findElement(By.id("name"))
    await driver.sleep(1000);

    await driver.findElement(By.id("item-1")).click()
    await driver.findElement(By.css(".rct-icon-uncheck")).click()
    await driver.findElement(By.css(".text-success:nth-child(2)")).click()
    await driver.findElement(By.id("item-2")).click()
    await driver.sleep(1000)

    await driver.findElement(By.css(".custom-control:nth-child(2) > .custom-control-label")).click()
    await driver.findElement(By.css(".text-success")).click()
    await driver.findElement(By.css(".show #item-3 > .text")).click()
    await driver.sleep(1000)

    await driver.findElement(By.css("#delete-record-1 path")).click()
    await driver.findElement(By.css("#delete-record-2 path")).click()
    await driver.findElement(By.css("#delete-record-3 path")).click()
    await driver.findElement(By.id("addNewRecordButton")).click()
    await driver.findElement(By.id("firstName")).click()
    await driver.findElement(By.id("firstName")).sendKeys("aaa")
    await driver.findElement(By.id("lastName")).sendKeys("llll")
    await driver.findElement(By.id("userEmail")).sendKeys("name@example.com")
    await driver.findElement(By.id("age")).sendKeys("15")
    await driver.findElement(By.id("salary")).sendKeys("100000")
    await driver.findElement(By.id("department")).sendKeys("yazılım")
    await driver.findElement(By.id("submit")).click()

    // await driver.findElement(By.id("item-4")).click()
    // await driver.sleep(1000)

    // //await driver.findElement(By.id("rightClickBtn")).click.()
    
    // await driver.findElement(By.id("doubleClickBtn")).click()
    // await driver.findElement(By.id("doubleClickBtn")).click()

    // //await driver.findElement(By.id("IerQM")).click()

    // // {
    // //   const element = await driver.findElement(By.id("doubleClickBtn"))
    // //   await driver.actions({ bridge: true}).doubleClick(element).perform()
    // // }
    // // await driver.sleep(1000)
    // // {
    // //   const element = await driver.findElement(By.id("doubleClickBtn"))
    // //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // // }

    // await driver.sleep(1000)

    // await driver.findElement(By.id("doubleClickMessage"))

    await driver.findElement(By.id("item-5")).click()
    await driver.sleep(1000)
    
    await driver.findElement(By.css(".show #item-6 > .text")).click()
    await driver.findElement(By.id("item-7")).click()
    await driver.sleep(1000)
    
    //await driver.findElement(By.id("uploadFile")).sendKeys("C:\\Users\\PC_4232\\Desktop\\JSTestPreoject\\foto.png")
    
  
    await driver.findElement(By.css(".show #item-8 > .text")).click()
    await driver.sleep(1000)

    await driver.findElement(By.id("colorChange")).click()

  })
})
