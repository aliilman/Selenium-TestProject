import { Builder, By, Key, until, WebDriver,WebElement,Actions } from 'selenium-webdriver';
import assert from 'assert';
import { afterEach, beforeEach, describe, it } from 'node:test';

describe('DEMOQ1', function() {

  let driver: WebDriver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('DEMOQ1', async function() {
    await driver.get("https://demoqa.com/automation-practice-form")

    await driver.findElement(By.id("firstName")).click()
    await driver.findElement(By.id("firstName")).sendKeys("fist")
    await driver.findElement(By.id("lastName")).sendKeys("last")
    await driver.findElement(By.id("userEmail")).sendKeys("name@example.com")
    await driver.findElement(By.css(".custom-radio:nth-child(1) > .custom-control-label")).click()
    await driver.findElement(By.id("userNumber")).click()
    await driver.findElement(By.id("userNumber")).sendKeys("0555333221")
    await driver.findElement(By.id("dateOfBirthInput")).click()
    await driver.findElement(By.css(".react-datepicker__year-select")).click()
    {
      const dropdown = await driver.findElement(By.css(".react-datepicker__year-select"))
      await dropdown.findElement(By.xpath("//option[. = '2001']")).click()
    }
    await driver.findElement(By.css(".react-datepicker__month-select")).click()
    {
      const dropdown = await driver.findElement(By.css(".react-datepicker__month-select"))
      await dropdown.findElement(By.xpath("//option[. = 'January']")).click()
    }
    await driver.findElement(By.css(".react-datepicker__day--001:nth-child(2)")).click()
    await driver.findElement(By.css(".custom-checkbox:nth-child(1) > .custom-control-label")).click()
    await driver.findElement(By.css(".custom-checkbox:nth-child(2)")).click()
    await driver.findElement(By.css(".custom-checkbox:nth-child(2) > .custom-control-label")).click()
    await driver.findElement(By.css(".custom-checkbox:nth-child(3) > .custom-control-label")).click()
    
    await driver.findElement(By.id("currentAddress")).sendKeys("asdsfasdfsafdsfas")
    

    var a = await driver.findElement(By.id("subjectsInput"))
    a.sendKeys("Maths")
    await driver.sleep(10)
    a.sendKeys(Key.ENTER)
    
    //await driver.findElement(By.css("react-select-3-option-0")).click()
    
    // var b = await driver.findElement(locateWith( By.css(".css-1hwfws3")).bellow(By.id("currentAddress-wrapper")));
    // b.click()  
    // b.sendKeys(Key.ARROW_DOWN)
    // b.sendKeys(Key.ENTER)
      

    // await driver.sleep(100)

    // var c = await driver.findElement(locateWith( By.css(".css-1hwfws3")).above(By.className("mt-4 justify-content-end row")))
    // c.click()
      
    // c.sendKeys(Key.ARROW_DOWN)  

    // c.sendKeys(Key.ENTER)
    await driver.sleep(100)   


    var d = await driver.findElement(By.className("btn btn-primary"));

    d.sendKeys(Key.ENTER)
    d.click()
    
    await driver.sleep(1000)

    // await driver.findElement(By.css("tr:nth-child(1) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(1) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(4) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(4) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(5) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(5) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(6) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(6) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(7) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(7) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(8) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(8) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(9) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(9) > td:nth-child(2)"))
    // await driver.findElement(By.css("tr:nth-child(10) > td:nth-child(1)"))
    // await driver.findElement(By.css("tr:nth-child(10) > td:nth-child(2)"))
    // await driver.findElement(By.id("closeLargeModal")).click()
    await driver.sleep(10000)
    
  })
})
