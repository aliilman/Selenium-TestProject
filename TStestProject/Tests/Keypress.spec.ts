import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';


describe("KeyPressTest", function () {

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
  it("KeyPressTest", async function () {
    await driver.get('https://the-internet.herokuapp.com/key_presses?');

    // Hedef elementi bul
    const target = await driver.findElement(By.id('target'));

    // Backspace tuşuna bas
    await target.sendKeys(Key.BACK_SPACE);

    // Sonuç elementini bul
    const result = await driver.findElement(By.id('result'));

    // Assert işlemi
    const expectedResult = 'You entered: BACK_SPACE';
    const actualResult = await result.getText();

    assert.equal(expectedResult,actualResult)

  });
});
