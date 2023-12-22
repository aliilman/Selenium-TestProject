const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  const driver = await new Builder().forBrowser('chrome').build();
 
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    await driver.wait(until.titleIs('Selenium - Google Search'), 1000);

    await driver.sleep(10000);

 
    await driver.quit();
  
})();
