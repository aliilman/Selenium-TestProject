import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

describe("DragnDropTest", function () {

  let driver: WebDriver
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.sleep(5000);
    await driver.quit();
  });
  it("DragnDropTest", async function () {
    // Sayfayı aç
    await driver.get("https://the-internet.herokuapp.com/drag_and_drop");

    // Elementleri bul
    const aBox = await driver.findElement(By.id("column-a"));
    const bBox = await driver.findElement(By.id("column-b"));

    // Drag-and-drop işlemi gerçekleştir
    await driver.actions({ bridge: true }).dragAndDrop(aBox, bBox).perform();

    // Element başlıklarını kontrol et
    const aHeader = await driver
      .findElement(By.css("#column-a > header"))
      .getText();
    const bHeader = await driver
      .findElement(By.css("#column-b > header"))
      .getText();
   
    assert.equal(aHeader,"B")
  });
});
