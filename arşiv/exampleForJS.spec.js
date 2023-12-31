// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("ExampleForJS", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("ExampleForJS", async function () {
    await driver.get("https://the-internet.herokuapp.com/javascript_alerts");
    await driver.manage().window().setRect({ width: 1152, height: 924 });

    try {
      await driver.findElement(By.css("li:nth-child(1) > button")).click();
      //assert((await driver.switchTo().alert().getText()) == "I am a JS Alert");
      await driver.switchTo().alert().accept();

      await driver.sleep(2000);

      await driver.findElement(By.css("li:nth-child(2) > button")).click();
      //assert((await driver.switchTo().alert().getText()) == "I am a JS Confirm");
      await driver.switchTo().alert().accept();

      await driver.sleep(2000);

      await driver.findElement(By.css("li:nth-child(3) > button")).click();
      //assert((await driver.switchTo().alert().getText()) == "I am a JS prompt");
      {
        const alert = await driver.switchTo().alert();
        await alert.sendKeys("asd");
        await alert.accept();
      }
      await driver.findElement(By.id("result"));

      assert((await driver.findElement(By.id("result")).getText) =="You entered: asd");

      await driver.sleep(5000);
    }
     catch {}

    await driver.close();
  });
});
