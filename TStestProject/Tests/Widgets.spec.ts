import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

describe('DEMOQ2', function() {

  let driver: WebDriver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('DEMOQ2', async function() {
    await driver.get("https://demoqa.com/accordian")


    await driver.findElement(By.id("section1Heading")).click()
    await driver.findElement(By.id("section2Heading")).click()
    await driver.findElement(By.id("section2Heading")).click()
    await driver.findElement(By.id("section3Heading")).click()
    await driver.findElement(By.id("section3Heading")).click()


    await driver.sleep(50);
    await driver.findElement(By.css(".show #item-1 > .text")).click()
    await driver.findElement(By.css(".auto-complete__value-container--is-multi")).click()
    await driver.findElement(By.css(".auto-complete__control--is-focused > .auto-complete__value-container")).click()




    await driver.findElement(By.css(".show #item-2")).click()
    await driver.findElement(By.id("datePickerMonthYearInput")).click()
    await driver.findElement(By.css(".react-datepicker__year-select")).click()
    {
      const dropdown = await driver.findElement(By.css(".react-datepicker__year-select"))
      await dropdown.findElement(By.xpath("//option[. = '2005']")).click()
    }
    await driver.findElement(By.css(".react-datepicker__month-select")).click()
    {
      const dropdown = await driver.findElement(By.css(".react-datepicker__month-select"))
      await dropdown.findElement(By.xpath("//option[. = 'February']")).click()
    }
    await driver.findElement(By.css(".react-datepicker__week:nth-child(1) > .react-datepicker__day--002")).click()
    await driver.findElement(By.id("dateAndTimePickerInput")).click()
    await driver.findElement(By.css(".react-datepicker__day--013")).click()
    await driver.findElement(By.css(".react-datepicker__time-list-item:nth-child(61)")).click()




    await driver.findElement(By.css(".show #item-4")).click()
    //await driver.findElement(By.id("startStopButton")).click()

    //await driver.sleep(11000);
    
    //await driver.findElement(By.id("resetButton")).click()
    
    await driver.sleep(1000);




    //await driver.findElement(By.css('.show #item-5')).click();
    await driver.get("https://demoqa.com/tabs");
    await driver.sleep(1000);

    await driver.findElement(By.id("demo-tab-origin")).click()
    await driver.findElement(By.id("demo-tab-use")).click()



    
    //await driver.findElement(By.css(".show #item-6")).click()
    await driver.get("https://demoqa.com/tool-tips");
    await driver.executeScript("window.scrollTo(0,0)")



    
    //await driver.findElement(By.css(".show #item-7")).click()
    await driver.get("https://demoqa.com/menu");

    
    // await driver.findElement(By.linkText("Main Item 1")).click()

    const hoverable = driver.findElement(By.linkText("Main Item 2"));
    const actions = driver.actions({ async: true });
    await actions.move({ origin: hoverable }).perform();

    // await driver.findElement(By.linkText("Sub Item")).click()
   // await driver.findElement(By.css("li:nth-child(2) > ul > li:nth-child(2) > a")).click()
    // await driver.findElement(By.linkText("SUB SUB LIST »")).click()

    
    const hoverable2 = driver.findElement(By.linkText("SUB SUB LIST »"));
    const actions2 = driver.actions({ async: true });
    await actions2.move({ origin: hoverable2 }).perform();

    await driver.sleep(50);
    // await driver.findElement(By.linkText("Sub Sub Item 1"))
    const hoverable3 = driver.findElement(By.linkText("Sub Sub Item 1"));
    const actions3 = driver.actions({ async: true });
    await actions3.move({ origin: hoverable3 }).perform();

    await driver.sleep(1000);
    // await driver.findElement(By.linkText("Sub Sub Item 2")).click()






    // //await driver.findElement(By.css(".show #item-8")).click()
    // await driver.get("https://demoqa.com/select-menu");

    // var a =  await driver.findElement(By.css(".css-1gtu0rj-indicatorContainer > .css-19bqh2r"))
    // a.click()
    // a.sendKeys(Key.ARROW_DOWN);
    // a.sendKeys(Key.ENTER)
    // //await driver.findElement(By.id("react-select-4-option-0-1")).click()

    // var b= await driver.findElement(By.css(".css-1gtu0rj-indicatorContainer > .css-19bqh2r")).click()
    // b.click()
    // b.sendKeys(Key.ARROW_DOWN);
    // b.sendKeys(Key.ENTER)

    // //await driver.findElement(By.id("react-select-5-option-0-1")).click()

    // await driver.findElement(By.id("oldSelectMenu")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("oldSelectMenu"))
    //   await dropdown.findElement(By.xpath("//option[. = 'Green']")).click()
    // }


    // await driver.findElement(By.css(".css-1gtu0rj-indicatorContainer > .css-19bqh2r")).click()
    // await driver.sleep(10);
    // await driver.findElement(By.id("react-select-6-option-1")).click()
    // await driver.findElement(By.id("react-select-6-option-2")).click()
    // await driver.findElement(By.id("react-select-6-option-0")).click()
    // await driver.findElement(By.id("react-select-6-option-3")).click()
    // await driver.findElement(By.css(".row:nth-child(7)")).click()
    // {
    //   const dropdown = await driver.findElement(By.id("cars"))
    //   await dropdown.findElement(By.xpath("//option[. = 'Volvo']")).click()
    // }
    await driver.close()
  })
})
