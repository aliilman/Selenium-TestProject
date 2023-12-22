import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';


describe("HepsiburadaGiris", function () {

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
  it("HepsiburadaGiris", async function () {
    await driver.get("https://hepsiburada.com");
    await driver.sleep(500);

    const hoverable = driver.findElement(
      By.className("sf-OldMyAccount-sS_G2sunmDtZl9Tld5PR user-info")
    );
    const actions = driver.actions({ async: true });
    await actions.move({ origin: hoverable }).perform();

    await driver.sleep(500);
    await driver.findElement(By.id("login")).click();

    await driver.sleep(3500);

    await driver.findElement(By.id("txtUserName")).click();
    await driver
      .findElement(By.id("txtUserName"))
      .sendKeys("lmnfnrbhc@gmail.com");
    await driver.sleep(500);
    await driver.findElement(By.id("btnLogin")).click();
    await driver.sleep(1000);
    // await driver.findElement(By.id("txtPassword")).click()
    // await driver.findElement(By.id("txtPassword")).click()
    await driver.findElement(By.id("txtPassword")).sendKeys("asdadsfadsfasdf");
    await driver.findElement(By.id("btnEmailSelect")).click();

    assert.ok;
  });
});
