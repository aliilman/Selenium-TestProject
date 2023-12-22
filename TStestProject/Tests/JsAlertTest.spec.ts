import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';


describe("JavaScriptAlertsTest", function () {

  let driver: WebDriver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.sleep(5000);
    await driver.quit();
  });
  it("JavaScriptAlertsTest", async function () {
    // Sayfayı aç
    await driver.get("https://the-internet.herokuapp.com/javascript_alerts");

    await driver.findElement(By.css("li:nth-child(1) > button")).click()

    var a=   await driver.switchTo().alert().getText()
    await driver.switchTo().alert().accept()

    assert(a == "I am a JS Alert")
   
  });
});

describe("JavaScriptConfirmTest", function () {

  let driver: WebDriver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.sleep(5000);
    await driver.quit();
  });
  it("JavaScriptConfirmTest", async function () {
    // Sayfayı aç
    await driver.get("https://the-internet.herokuapp.com/javascript_alerts");

    await driver.findElement(By.css("li:nth-child(2) > button")).click()

    var a=   await driver.switchTo().alert().getText()
    await driver.switchTo().alert().accept()

    assert(a == "I am a JS Confirm")
   
  });
});


describe("JavaScriptConfirmTest", function () {

  let driver: WebDriver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.sleep(5000);
    await driver.quit();
  });
  it("JavaScriptConfirmTest", async function () {
    // Sayfayı aç
    await driver.get("https://the-internet.herokuapp.com/javascript_alerts");

    await driver.findElement(By.css("li:nth-child(3) > button")).click()

    {
      const alert = await driver.switchTo().alert()
      await alert.sendKeys("asd")
      await alert.accept()
    }

    assert(await driver.findElement(By.id("result")).getText() == "You entered: asd")
   
  });
});