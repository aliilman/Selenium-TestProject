// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('aasda', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('aasda', async function() {
    await driver.get("https://demoqa.com/")
    await driver.manage().window().setRect({ width: 1152, height: 924 })
    await driver.findElement(By.css(".card:nth-child(2) .card-body")).click()
    await driver.findElement(By.css(".show #item-0")).click()
    await driver.findElement(By.css(".subjects-auto-complete__value-container")).click()
    await driver.findElement(By.css(".subjects-auto-complete__value-container")).click()
    await driver.findElement(By.id("subjectsInput")).sendKeys("math")
    await driver.findElement(By.id("subjectsInput")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".css-1pahdxg-control > .css-1hwfws3")).click()
    await driver.findElement(By.id("react-select-3-option-1")).click()
    await driver.findElement(By.css(".css-1gtu0rj-indicatorContainer path")).click()
    await driver.findElement(By.id("react-select-4-option-1")).click()
  })
})
